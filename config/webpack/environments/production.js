'use strict';
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(_path) {
  return {
    context: _path,
    debug: false,
    devtool: 'cheap-source-map',
    output: {
      filename: '[name].[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['www'], {
        root: _path,
        verbose: true,
        dry: false
      })
    ]
  };
};
