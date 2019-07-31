const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(srcDir, 'index.ts'),
  output: {
    path: outDir,
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  devtool: 'source-map',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-dom/server': 'react-dom/server',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    }

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
        use: [
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.join(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CheckerPlugin()],
};
