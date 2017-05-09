var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: {
     home: './home/main.jsx',
     list: './list/main.jsx'
  },

  output: {
      path: '../todo_app/_static/apps/',
      filename: "[name].js",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'common_components/css', 'common_components/js'],
    extensions: ['', '.js', '.jsx', '.css']
  },
}
