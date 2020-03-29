const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { resolve } = require('path');
const portFinderSync = require('portfinder-sync');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const distPath = 'docs';

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

module.exports = ({ mode }) => {
  return webpackMerge({
    mode,
    resolve: {
      extensions: ['.js', '.ts', '.md']
    },
    entry: {
      'app': ['./src/app.ts']
    },
    output: {
      publicPath: '/',
      path: resolve(__dirname, distPath),
      filename: '[name]_es6.bundle.js',
      chunkFilename: '[id]_es6.js'
    },
    devServer: {
      inline: true,
      host: '127.0.0.1',
      port: portFinderSync.getPort(8080),
      compress: true,
      historyApiFallback: true,
      writeToDisk: true
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      ie: '11'
                    }
                  }
                ]
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        },
        {
          test: /\.css|\.s(c|a)ss$/,
          use: [{
            loader: 'lit-scss-loader',
            options: {
              minify: true
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.md$/,
          use: [
              {
                  loader: "html-loader"
              },
              {
                  loader: "markdown-loader",
                  options: {
                    baseUrl: '/'
                  }
              }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        'images/**',
        'src/manifest.json',
        'download/**'
      ]),
      new webpack.ProgressPlugin()
    ]
  },
  modeConfig({mode}))
}

