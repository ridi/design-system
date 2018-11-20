const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: 'source-map',
  externals: {
    react: 'React',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        use: ['tslint-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
};
