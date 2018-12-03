const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const fileNames = fs.readdirSync('svgs').filter(name => /\.svg$/.test(name));

(() => {
  const data = fileNames.map((fileName) => {
    const moduleName = path.basename(fileName, '.svg');
    return `export { default as ${moduleName} } from './svgs/${fileName}';`;
  }).join('\n') + '\n';

  fs.writeFileSync('index.js', data);

  console.log('- Generated index.js');
})();

(() => {
  const data = fileNames.map((fileName) => {
    const moduleName = path.basename(fileName, '.svg');
    return `export const ${moduleName}: any;`;
  }).join('\n') + '\n';

  fs.writeFileSync('index.d.ts', data);

  console.log('- Generated index.d.ts');
})();

console.log(chalk.bold.green('Build finished!'));
