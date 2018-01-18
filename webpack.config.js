const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'public/bundle.js',
  },
  node: {
  fs: 'empty'
  },
  devtool: 'source-map',
};
