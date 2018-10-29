const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: `bundle.${require('./package.json').version}.js`,
    path: path.resolve(__dirname, 'dist')
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
  devServer: {
    publicPath: path.join('/dist/')
  }
}
