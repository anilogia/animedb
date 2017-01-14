module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: '_assets/javascripts/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      }
    ]
  },
  babel: {
    presets: [ 'env' ],
  },
};
