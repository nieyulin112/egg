const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new ExtractTextWebpackPlugin('./src/style/style.less')
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextWebpackPlugin({
        use: 'css-loader'
      })
    }]
  },
  mode: 'development'
}
