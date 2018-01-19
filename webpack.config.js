const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'public/bundle.js',
  },
  node: {
  fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
