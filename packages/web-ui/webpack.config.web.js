const _ = require('lodash');
const commonConfig = require('./webpack.config.common');

module.exports = _.merge({},
  commonConfig,
  {
    output: {
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
  },
);
