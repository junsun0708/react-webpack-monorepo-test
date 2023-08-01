const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/project-core/index.js",
    project1: "./src/project1/p1App.js",
    project2: "./src/project2/p2App.js",
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
      main: path.resolve(__dirname, "project-core"), // main 폴더를 모듈로 사용하기 위한 alias
    },
  },
};
