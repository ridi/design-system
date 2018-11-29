/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const async = require('async');
const Handlebars = require('handlebars');
const Color = require('./color');
const data = require('../src/data');
const lessMap = require('../src/less.map');

const aseEncode = require('./.ase.builder');

require('./.handlebars.helpers.js');

const json = {};

const parse = (array, color) => {
  const hasNumberProperty = Object.prototype.hasOwnProperty.call(color, 'number');
  const name = hasNumberProperty ? `${color.name}_${color.number}` : color.name;
  array.push({ name, color: new Color(color) });
};

// convert
Object.entries(data)
  .forEach(([name, value]) => {
    const array = [];
    if (Object.prototype.hasOwnProperty.call(value, 'variations')) {
      value.variations.forEach(derived => {
        if (!Object.prototype.hasOwnProperty.call(derived, 'hue') && value.hue) {
          Object.assign(derived, { hue: value.hue });
        }
        parse(array, Object.assign({ name }, derived));
      });
    } else if (Array.isArray(value)) {
      value.forEach(derived => {
        parse(array, Object.assign({}, derived, { name: name ? `${name}_${derived.name}` : derived.name }));
      });
    } else {
      parse(array, Object.assign({}, value, { name }));
    }
    json[name || 'etc'] = array;
  });

// less mapping
const less = lessMap.map(item => {
  const [name, key] = Object.entries(item)[0];
  const splitted = /(\w*)\[(\w*)\]/.exec(key);
  if (splitted) {
    const group = data[splitted[1]];
    const variations = Array.isArray(group) ? group : group.variations;
    if (variations) {
      let color = variations.find(derived => (~~splitted[2] === derived.number) || (splitted[2] === derived.name)) || {};
      if (!Object.prototype.hasOwnProperty.call(color, 'hue') && group.hue) Object.assign(color, { hue: group.hue });
      color = new Color(color);
      return { name, hex: color.toHex() };
    } else if (!splitted[2]) {
      const color = new Color(group);
      return { name, hex: color.toHex() };
    }
  }
  return { name, hex: key };
});

const pluginsDir = path.resolve(__dirname, '../plugins/');
if (!fs.existsSync(pluginsDir)) {
  fs.mkdirSync(pluginsDir);
}

const templateDir = path.resolve(__dirname, '../templates/');
const templates = fs.readdirSync(templateDir, 'utf8');

module.exports = new Promise((resolve, reject) => {
  async.parallel([
    ...templates.map(templateName => callback => {
      try {
        const filename = templateName.replace('.hbs', '')
          .replace('plugins.', 'plugins/');
        console.log(`- Create ${filename}`);
        const template = fs.readFileSync(path.join(templateDir, templateName), 'utf8');
        const compile = Handlebars.compile(template);
        fs.writeFile(path.resolve(__dirname, `../${filename}`), compile({ json, less }), callback);
      } catch (err) {
        callback(err);
      }
    }),

    // build ase files
    callback => {
      try {
        const filename = 'plugins/RIDI Colors.ase';
        console.log(`- Create ${filename}`);
        fs.writeFile(path.resolve(__dirname, '../', filename), aseEncode(json), callback);
      } catch (err) {
        callback(err);
      }
    },
  ], (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});
