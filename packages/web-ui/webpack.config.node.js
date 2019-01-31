const _ = require('lodash');
const commonConfig = require('./webpack.config.common');

module.exports = _.merge({},
  commonConfig,
  {
    target: 'node',
    output: {
      filename: 'index.node.js',
    },
  },
);
