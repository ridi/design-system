/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');
const SVGO = require('svgo');
const Handlebars = require('handlebars');

module.exports = (async () => {
  require('./.handlebars.helpers.js');

  // svgo optimize
  const configFile = path.resolve(__dirname, '.svgo.yml');
  const config = YAML.load(configFile);

  const svgo = new SVGO(config);

  const src = path.resolve(__dirname, '../src/');
  const dist = path.resolve(__dirname, '../icons/');
  const files = fs.readdirSync(src, 'utf8').filter(name => /\.svg$/.test(name));

  const svgList = {};

  console.log(`- Create icons/*.svg`);

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  await Promise.all(files.map(filename => (async () => {
    const file = fs.readFileSync(path.join(src, filename), 'utf8');
    const result = await svgo.optimize(file);
    const name = filename.split('.')[0];
    const svg = /<svg[^>]*viewBox="0 0 ([.\d]+) ([.\d]+)"[^>]*>(.*)<\/svg>/.exec(result.data);

    svgList[name] = {
      width: Number(svg[1]),
      height: Number(svg[2]),
      contents: svg[3].replace(/"/g, '\''),
      path: result.data,
    };
    fs.writeFileSync(path.join(dist, filename), result.data);
  })()));

  // build templates
  const templateDir = path.resolve(__dirname, '../templates/');
  const templates = fs.readdirSync(templateDir, 'utf8');

  const distDir = path.resolve(__dirname, '../dist/');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  await Promise.all(templates.map(templateName => (async () => {
    const filename = templateName.replace('.hbs', '').replace('dist.', 'dist/');
    console.log(`- Create ${filename}`);

    const template = fs.readFileSync(path.join(templateDir, templateName), 'utf8');
    const compile = Handlebars.compile(template);

    fs.writeFileSync(path.resolve(__dirname, `../${filename}`), compile({ svgList }));
  })()));
})();
