const path = require('path')

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: `bundle.js`
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: [
      '.json',
      '.js'
    ]
  },
  devtool: 'source-map',
  devServer: {}
}
