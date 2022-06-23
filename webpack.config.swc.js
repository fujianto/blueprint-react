const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },
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
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      use: {
        loader: 'swc-loader',
        options: {
          // This makes swc-loader invoke swc synchronously.
          sync: true,
          jsc: {
            parser: {
              syntax: "typescript"
            }
          }
        }
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }]
  }
});