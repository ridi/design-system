/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const async = require('async');
const YAML = require('yamljs');
const SVGO = require('svgo');
const Handlebars = require('handlebars');

require('./.handlebars.helpers.js');

// svgo optimize
const configFile = path.resolve(__dirname, '.svgo.yml');
const config = YAML.load(configFile);

const svgo = new SVGO(config);

const src = path.resolve(__dirname, '../src/');
const dist = path.resolve(__dirname, '../icons/');
const files = fs.readdirSync(src, 'utf8')
  .filter(name => /\.svg$/.test(name));

if (!fs.existsSync(dist)) fs.mkdirSync(dist);

const svgList = {};

files.forEach(filename => {
  const file = fs.readFileSync(path.join(src, filename), 'utf8');
  svgo.optimize(file, result => {
    const name = filename.split('.')[0];
    const svg = /<svg[^>]*viewBox="0 0 ([.\d]+) ([.\d]+)"[^>]*>(.*)<\/svg>/.exec(result.data);
    svgList[name] = {
      width: Number(svg[1]),
      height: Number(svg[2]),
      contents: svg[3].replace(/"/g, '\''),
      path: result.data,
    };
    fs.writeFile(path.join(dist, filename), result.data, err => {
      if (err) throw err;
    });
  });
});

// build templates
const templateDir = path.resolve(__dirname, '../templates/');
const templates = fs.readdirSync(templateDir, 'utf8');

const distDir = path.resolve(__dirname, '../dist/');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

module.exports = new Promise((resolve, reject) => {
  async.parallel([...templates.map(templateName => callback => {
    try {
      const filename = templateName.replace('.hbs', '')
        .replace('dist.', 'dist/');
      console.log(`- Create ${filename}`);

      const template = fs.readFileSync(path.join(templateDir, templateName), 'utf8');
      const compile = Handlebars.compile(template);

      fs.writeFile(path.resolve(__dirname, `../${filename}`), compile({ svgList }), callback);
    } catch (err) {
      callback(err);
    }
  })], (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  });
});
