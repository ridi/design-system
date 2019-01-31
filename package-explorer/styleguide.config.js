const _ = require('lodash');
const path = require('path');
const { parse: propsParser } = require('react-docgen-typescript');
const colorsPackage = require('@ridi/colors/package.json');
const webIconsPackage = require('@ridi/web-icons/package.json');
const webUiPackage = require('@ridi/web-ui/package.json');
const webUiWebpackConfig = require('@ridi/web-ui/webpack.config.web');

const getDescription = ({ name, version }) => `\
[\`${name}@${version}\`](https://www.npmjs.com/package/${name}/v/${version})\
`;

module.exports = {
  styleguideDir: 'dist',
  title: 'RIDI Design System Packages',
  pagePerSection: true,
  sections: [
    {
      name: 'colors',
      content: '../packages/colors/README.md',
      description: getDescription(colorsPackage),
      usageMode: 'hide',
      exampleMode: 'hide',
    },
    {
      name: 'web-icons',
      content: '../packages/web-icons/README.md',
      description: getDescription(webIconsPackage),
      usageMode: 'hide',
      exampleMode: 'hide',
    },
    {
      name: 'web-ui',
      content: '../packages/web-ui/README.md',
      description: getDescription(webUiPackage),
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
  moduleAliases: {
    [webUiPackage.name]: path.join(__dirname, '../packages/web-ui/src'),
  },
  webpackConfig: (env) =>
    _.merge(
      {},
      webUiWebpackConfig,
      {
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
      },
      env === 'development' && {
        mode: 'development',
        devtool: 'eval-source-map',
      },
    ),
};
