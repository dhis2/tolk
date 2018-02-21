const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PermissionsOutputPlugin = require('webpack-permissions-plugin')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'pootlize.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
      new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new PermissionsOutputPlugin({
          buildFiles: [
              {
                  path: path.join(__dirname, 'build', 'pootlize.js'),
                  fileMode: '755'
              }
          ]
      })
  ],
}
