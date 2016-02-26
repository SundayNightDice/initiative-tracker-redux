module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!less?noIeCompat'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.less']
  }
};
