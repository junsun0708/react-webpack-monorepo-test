const path = require("path");
//const React = require();
//var webpack = require("webpack");
//var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  //devtool : 'eval', //hidden-source-map
  //plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  resolve: {
    extensions: ["js", "jsx"],
  },
  entry: {
    //입력
    core: "./core/index.js",
    prj1: "./prj1/src/index.js", //확장자 안써도 됨. 위에 resolve에 넣으면 알아서 찾아줌.
    prj2: "./prj2/src/index.js", //만약 prj2에 prj1이 있으면 prj1은 안써도됨.
  },
  output: {
    //출력
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // 현재폴더 기준이기 때문에 각각 프로젝트에 webpack.config.js 넣어도 될듯함.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // babel-loader 추가
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], //프리셋은 플러그인의 모음이기 때문에 각 프리셋에 옵션도 줄수 있음. (ex. last 2 chrome)
            //plugins : [기본적으로 프리셋만 하고 오류 발생하면 플러그인도 추가],
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
