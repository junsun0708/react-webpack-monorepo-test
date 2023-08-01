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
        use: {
          loader: "babel-loader", // babel-loader 추가
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // .css 확장자를 가진 파일을 처리하는 로더 설정
        use: ["style-loader", "css-loader"], // style-loader와 css-loader 추가
      },
      {
        test: /\.svg$/, // .svg 확장자를 가진 파일을 처리하는 로더 설정
        use: {
          loader: "file-loader", // file-loader 추가
        },
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
