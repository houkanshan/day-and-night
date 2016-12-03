const path = require('path');
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? 'source-map' : null,
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
