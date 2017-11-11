const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app.html',
  filename: 'index.html',
  inject: 'body'
});

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
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
    extractSass
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: {loader: 'babel-loader'},
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {loader: 'file-loader', options: {name: 'style/fonts/[name].[ext]'}}
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: [
            {loader: "css-loader", options: {sourceMap: true}},
            {loader: "postcss-loader", options: {sourceMap: true}},
            {loader: "sass-loader", options: {sourceMap: true}}
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};