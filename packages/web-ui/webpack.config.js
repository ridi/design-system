const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(srcDir, 'index.ts'),
  output: {
    path: outDir,
    filename: 'index.js',
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
        include: srcDir,
        use: ['tslint-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        include: srcDir,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outDir]),
    new CheckerPlugin(),
  ],
};
