const _ = require('lodash');
const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const { version } = require('../lerna.json');
const webUiWebpackConfig = require('../packages/web-ui/webpack.config.web');
const webUiPackage = require('../packages/web-ui/package.json');

module.exports = {
  styleguideDir: `dist/v${version}`,
  title: 'RIDI Design System Packages',
  pagePerSection: true,
  sections: [
    {
      name: 'colors',
      content: '../packages/colors/README.md',
      usageMode: 'hide',
      exampleMode: 'hide',
    },
    {
      name: 'web-icons',
      content: '../packages/web-icons/README.md',
      usageMode: 'hide',
      exampleMode: 'hide',
    },
    {
      name: 'web-ui',
      content: '../packages/web-ui/README.md',
      components: '../packages/web-ui/src/*/index.{ts,tsx}',
      usageMode: 'expand',
    },
  ],
  styleguideComponents: {
    SectionRenderer: path.join(__dirname, 'styleguide/components/SectionRenderer'),
  },
  getComponentPathLine: (componentPath) => {
    const componentName = path.basename(path.dirname(componentPath));
    return `import { ${componentName} } from '${webUiPackage.name}';`;
  },
  propsParser,
  editorConfig: {
    theme: 'dracula',
    smartIndent: true,
  },
  webpackConfig: (env) => {
    const webpackConfig = _.merge({}, webUiWebpackConfig, {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'styleguide'),
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react'],
                },
              },
            ],
          },
        ],
      },
    });

    if (env === 'development') {
      return {
        ...webpackConfig,
        mode: 'development',
        devtool: 'eval-source-map',
      };
    }

    return webpackConfig;
  },
};
