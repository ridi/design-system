const Handlebars = require('handlebars');

Handlebars.registerHelper('toJSON', data => JSON.stringify(data, null, '  '));

Handlebars.registerHelper('replace', (string, from, to) => string.replace(from, to));

Handlebars.registerHelper('multiply', (target, value) => Math.round(target * value));

Handlebars.registerHelper('toArrayMap', (data, ...format) => {
  if (typeof data !== 'object') return;
  format = format.filter(str => typeof str === 'string');
  const result = {};

  if (!Array.isArray(data)) {
    for (const key in data) {
      result[key] = [...format].map(param => data[key][param]);
    }
  }
  return result;
});
