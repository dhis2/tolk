const path = require('path')
const webpack = require('webpack')
const PermissionsOutputPlugin = require('webpack-permissions-plugin')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  watch: true,
  output: {
    filename: 'pootlize.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new PermissionsOutputPlugin({
      buildFiles: [
        {
          path: path.join(__dirname, 'build', 'pootlize.js'),
          fileMode: '755',
        },
      ],
    }),
  ],
}
