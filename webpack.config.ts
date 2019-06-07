import { join } from 'path';
import { Configuration } from 'webpack';

export default (): Configuration => ({
  mode: 'production',
  entry: ['./src/index.ts'],

  output: {
    filename: 'index.js',
    path: join(__dirname, 'dist'),
    sourceMapFilename: 'index.map',
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
});
