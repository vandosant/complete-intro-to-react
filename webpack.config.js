const path = require('path')

module.exports = {
  context: __dirname, // provided by node
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'] // find require paths without extensions
  },
  stats: {
    colors: true,
    reasons: true, // verbose errors
    chunks: false
  },
  module: {
    loaders: [ // build pipeline
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
