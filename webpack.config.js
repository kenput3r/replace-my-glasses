const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: {
    PageBuild: "./src/PageBuild.js",
    Product: "./src/Product.js",
    PrescriptionForm: "./src/PrescriptionForm",
    ProductSkeleton: "./src/ProductSkeleton.js",
  },
  devtool: "source-map",
  mode: "development",
  output: {
    filename: "[name].js",
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
  plugins: [new Dotenv()],
  target: "node",
}
