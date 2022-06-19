const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
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