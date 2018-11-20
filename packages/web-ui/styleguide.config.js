const { parse: propsParser } = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config');

module.exports = {
  components: 'src/*/index.{ts,tsx}',
  propsParser,
  usageMode: 'expand',
  exampleMode: 'expand',
  webpackConfig: {
    ...webpackConfig,
    mode: 'development',
    devtool: 'eval-source-map',
  },
};
