var path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
	loader: 'babel-loader',
	include: path.join(__dirname, 'src')
      }
    ]
  }
}
