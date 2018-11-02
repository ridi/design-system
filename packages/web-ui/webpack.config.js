import CleanWebpackPlugin from 'clean-webpack-plugin';
import path from 'path';

export default {
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['tslint-loader'],
        enforce: 'pre',
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
