const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-latest')
const pageId = require('spike-page-id')
const simpleVars = require('postcss-simple-vars')
const lost = require('lost')
const aspectRatio = require('postcss-aspect-ratio')
const shape = require('postcss-shape')


module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      parser: false,
      webpack: ctx,
      locals: { foo: 'bar' }
    })
  },
  postcss: (ctx) => {
    return cssStandards({ parser: false, webpack: ctx })
  },
  babel: { presets: [latest] }
}
