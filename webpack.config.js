const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin('style.css', {
  allChunks: true
});

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {loader: 'babel-loader'},
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}
      },
      {
        test: /\.sass$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader", options: {sourceMap: true}}
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};