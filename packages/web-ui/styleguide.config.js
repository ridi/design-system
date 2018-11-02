import { parse as propsParser } from 'react-docgen-typescript';
import webpackConfig from './webpack.config';

export default {
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
