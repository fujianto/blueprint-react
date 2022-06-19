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
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [htmlPlugin, cleanWebpackPlugin]
};