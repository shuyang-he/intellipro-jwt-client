const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "./src/index.html"),
      inject: "head",
      scriptLoading: "defer",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: ASSET_PATH,
  },
};
