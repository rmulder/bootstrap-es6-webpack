const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        include: path.resolve(__dirname, 'src/sass'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: path.resolve(__dirname, 'src/assets'),
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src/fonts'),
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};
