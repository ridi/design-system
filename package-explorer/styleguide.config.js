const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const webUiWebpackConfig = require('../packages/web-ui/webpack.config.web');
const webUiPackage = require('../packages/web-ui/package.json');

module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: "colors",
      usageMode: "hide",
      exampleMode: "hide"
    },
    {
      name: "web-icons",
      usageMode: "hide",
      exampleMode: "hide"
    },
    {
      name: 'web-ui',
      components: "../packages/web-ui/src/*/index.{ts,tsx}",
      usageMode: "expand",
    }
  ],
  getComponentPathLine: componentPath => {
    const componentName = path.basename(path.dirname(componentPath));
    return `import { ${componentName} } from '${webUiPackage.name}';`;
  },
  propsParser,
  editorConfig: {
    theme: "dracula",
    smartIndent: true
  },
  webpackConfig: {
    ...webUiWebpackConfig,
    mode: "development",
    devtool: "eval-source-map"
  }
};
