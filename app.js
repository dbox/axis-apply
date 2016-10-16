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
  matchers: {
    html: '**/*.sgr',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      webpack: ctx,
      locals: { pageId: pageId(ctx), foo: 'bar' }
    })
  },
  postcss: (ctx) => {
    const std = cssStandards({ webpack: ctx })
    std.plugins.push(simpleVars, lost, aspectRatio, shape)
    return std
  },
  babel: { presets: [jsStandards] }
}
