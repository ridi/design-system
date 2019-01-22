const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const webUiWebpackConfig = require('../packages/web-ui/webpack.config.web');
const webUiPackage = require('../packages/web-ui/package.json');

module.exports = {
  components: '../packages/web-ui/src/*/index.{ts,tsx}',
  getComponentPathLine: (componentPath) => {
    const componentName = path.basename(path.dirname(componentPath));
    return `import { ${componentName} } from '${webUiPackage.name}';`;
  },
  propsParser,
  usageMode: 'expand',
  editorConfig: {
    theme: 'dracula',
    smartIndent: true,
  },
  webpackConfig: {
    ...webUiWebpackConfig,
    mode: 'development',
    devtool: 'eval-source-map',
  },
};
