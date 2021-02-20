const path = require("path");

module.exports = {
  entry: {
    page_build: "./src/page-build.js"
  },
  devtool: "source-map",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "theme/assets"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react-app"],
          },
        },
      },
    ],
  },
};