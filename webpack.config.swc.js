const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        // `.swcrc` can be used to configure swc  
        loader: "swc-loader"
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  }
});