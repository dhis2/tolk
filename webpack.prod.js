const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PermissionsOutputPlugin = require('webpack-permissions-plugin')

const devConfig = require('./webpack.dev')

module.exports = Object.assign({}, devConfig, {
  watch: false,
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new PermissionsOutputPlugin({
      buildFiles: [
        {
          path: path.join(__dirname, 'build', 'pootlize.js'),
          fileMode: '755',
        },
      ],
    }),
  ],
})
