const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const Color = require('color');
const pkg = require('./package.json');

const sourceColors = require('./hwb.json');

const generateModuleDefinition = () => {
  const fileName = 'index.d.ts';

  const statements = _.map(sourceColors, (color, name) => (
    `  const ${name}: string;`
  )).join('\n');

  const data = `\
declare module '${pkg.name}' {
${statements}
}
`;

  fs.writeFileSync(path.join(__dirname, fileName), data);

  console.log(`- Generated ${fileName}`);
};

const convertColors = (colors, converter, fileName) => {
  const convertedColors = _.mapValues(colors, converter);
  const jsonString = JSON.stringify(convertedColors, null, 2);
  fs.writeFileSync(path.join(__dirname, fileName), jsonString);

  console.log(`- Generated ${fileName}`);
};

generateModuleDefinition();
convertColors(sourceColors, color => Color(color).hex(), 'hex.json');
convertColors(sourceColors, color => Color(color).rgb().string(), 'rgb.json');
convertColors(sourceColors, color => Color(color).hsl().string(), 'hsl.json');

console.log(chalk.bold.green('Build finished!'));
