const Handlebars = require('handlebars');
const flatMap = require('lodash/flatMap');

Handlebars.registerHelper('toJSON', data => JSON.stringify(data, null, '  '));

Handlebars.registerHelper('toHex', item => item.color.toHex());

Handlebars.registerHelper('toHsl', item => item.color.toHsl());

Handlebars.registerHelper('toHwb', item => item.color.isGray ? item.color.toGray() : item.color.toHwb());

Handlebars.registerHelper('jsonMap', data => {
  const obj = {};
  Object.entries(data)
    .forEach(([key, array]) => {
      obj[key] = array.map(item => ({
        name: item.name,
        hex: item.color.toHex(),
        hsl: item.color.toHsl(),
        hwb: item.color.toHwb(),
      }));
    });
  return obj;
});

Handlebars.registerHelper('sketchpalette', data => {
  const colors = flatMap(data, array => array.map(item => ({
    red: item.color.red,
    green: item.color.green,
    blue: item.color.blue,
    alpha: 1,
  })));
  return {
    compatibleVersion: '1.4',
    pluginVersion: '1.5',
    colors,
  };
});

Handlebars.registerHelper('zeplin', data => {
  const obj = {};
  Object.values(data)
    .forEach(array => {
      array.forEach(item => {
        obj[item.color.toHex()] = item.name;
      });
    });
  return obj;
});
