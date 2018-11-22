const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config');
const pkg = require('./package.json');

module.exports = {
  components: 'src/*/index.{ts,tsx}',
  getComponentPathLine: (componentPath) => {
    const componentName = path.basename(path.dirname(componentPath));
    return `import { ${componentName} } from '${pkg.name}';`;
  },
  propsParser,
  usageMode: 'expand',
  exampleMode: 'expand',
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
