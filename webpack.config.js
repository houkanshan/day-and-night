const path = require('path');

module.exports = {
  entry: './source/js/index.es',
  output: {
    path: __dirname,
    filename: 'js/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.es?$/,
        include: [
          path.resolve(__dirname, "source"),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
      },
    ]
  },
};
