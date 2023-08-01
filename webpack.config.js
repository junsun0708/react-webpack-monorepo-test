const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    prj1: "./prj1/src/index.js",
    prj2: "./prj2/src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      core: path.resolve(__dirname, "core"),
    },
  },
};
