const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config');
const pkg = require('./package.json');

module.exports = {
  getComponentPathLine: (componentPath) => {
    const componentName = path.basename(path.dirname(componentPath));
    return `import { ${componentName} } from '${pkg.name}';`;
  },
  sections: [
    {
      name: 'Components',
      components: 'src/*/index.{ts,tsx}',
      ignore: 'src/Book/index.{ts,tsx}',
    },
    {
      name: 'Book',
      content: 'src/Book/README.md',
    },
  ],
  context: {
    Book: path.join(__dirname, 'src/Book/Book'),
  },
  propsParser,
  usageMode: 'expand',
  editorConfig: {
    theme: 'dracula',
    smartIndent: true,
  },
  webpackConfig: {
    ...webpackConfig,
    mode: 'development',
    devtool: 'eval-source-map',
  },
};
