const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './source/js/index.es',
  output: {
    path: __dirname,
    filename: 'js/index.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(es|js)$/,
        include: [
          path.resolve(__dirname, "source/js"),
        ],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-2'],
        },
        resolve: {
          extensions: ['.es', '.js'],
        }
      },
    ]
  },
};
