const path = require('path')
const webpack = require('webpack')
const PermissionsOutputPlugin = require('webpack-permissions-plugin')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  watch: true,
  output: {
    filename: 'tolk.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new PermissionsOutputPlugin({
      buildFiles: [
        {
          path: path.join(__dirname, 'build', 'tolk.js'),
          fileMode: '755',
        },
      ],
    }),
  ],
}
