const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PORT = process.env.PORT || 3000;
const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    port: PORT,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
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
