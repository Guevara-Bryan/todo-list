const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    controller: './src/controller.js',
    model: './src/model.js',
    view: './src/view.js',
    test: './src/test/test.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};