const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        library: 'app'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: [ 
                            "@babel/plugin-proposal-class-properties", 
                            "@babel/plugin-transform-async-to-generator" 
                           ],
                }
              }
          },
          {
            test: /\.(css|sass)$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  outputPath: 'images/',
                }
              }
            ],
          },
          {
            test: /\.svg$/,
            use: 'raw-loader'
          },
          {
            test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=fonts/[name].[ext]',
          },
        ]
      },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      historyApiFallback: true,
      port: 9000
    },
};