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
      ignore: 'src/LibraryBook/index.{ts,tsx}',
    },
    {
      name: 'LibraryBook',
      content: 'src/LibraryBook/README.md',
    },
  ],
  context: {
    LibraryBook: path.join(__dirname, 'src/LibraryBook/LibraryBook'),
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
