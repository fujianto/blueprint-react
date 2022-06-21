const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'esbuild-loader',
      options: {
        loader: 'jsx',
        target: 'es2015'  // Syntax to compile to (see options below for possible values)
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  }
});