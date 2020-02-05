/* eslint-disable */
const withCss = require('@zeit/next-css')
const withImages = require('next-images')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withImages(
  withCss({
    webpack: function(config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      })
      return config
    },
  })
)
