const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const fileNames = fs.readdirSync('svgs').filter(name => /\.svg$/.test(name));

const getModuleName = fileName => {
  const moduleName = _.camelCase(path.basename(fileName, '.svg'));
  return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
};

(() => {
  const data = fileNames.map((fileName) => {
    const moduleName = getModuleName(fileName);
    return `export { default as ${moduleName} } from './svgs/${fileName}';`;
  }).join('\n') + '\n';

  fs.writeFileSync('index.js', data);

  console.log('- Generated index.js');
})();

(() => {
  const data = fileNames.map((fileName) => {
    const moduleName = getModuleName(fileName);
    return `export const ${moduleName}: any;`;
  }).join('\n') + '\n';

  fs.writeFileSync('index.d.ts', data);

  console.log('- Generated index.d.ts');
})();

console.log(chalk.bold.green('Build finished!'));
