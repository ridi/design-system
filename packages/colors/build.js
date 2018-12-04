const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const Color = require('color');

const sourceColors = require('./hwb.json');

const convertColors = (colors, converter, fileName) => {
  const convertedColors = _.mapValues(colors, converter);
  const jsonString = JSON.stringify(convertedColors, null, 2);
  fs.writeFileSync(path.join(__dirname, fileName), jsonString);

  console.log(`- Generated ${fileName}`);
};

convertColors(sourceColors, color => Color(color).hex(), 'hex.json');
convertColors(sourceColors, color => Color(color).rgb().string(), 'rgb.json');
convertColors(sourceColors, color => Color(color).hsl().string(), 'hsl.json');

console.log(chalk.bold.green('Build finished!'));
