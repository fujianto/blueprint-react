const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  inject: true, // inject js in body tag
  filename: "./index.html"
});

const cleanWebpackPlugin = new CleanWebpackPlugin()

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin, cleanWebpackPlugin]
};