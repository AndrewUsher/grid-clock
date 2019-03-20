const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HTMLWebpackPlugin({ template: `${__dirname}/src/renderer/index.html` })
  ]
}
