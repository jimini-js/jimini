var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/App.js'
  ],
  output: {
    path: __dirname + '/client/components/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './client'
  }
};
