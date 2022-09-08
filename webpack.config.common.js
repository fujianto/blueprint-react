/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  inject: true, // inject js in body tag
  filename: './index.html'
});
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js','.jsx','.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    },
    plugins: [
      new TsconfigPathsPlugin()
    ],
  }, 
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin, cleanWebpackPlugin]
};
