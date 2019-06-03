const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: `octadesk.iframe.min.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'OctadeskIframe',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
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
