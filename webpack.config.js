const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: "wordreplay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // 입력
  entry: {
    app: ["./src/index"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, // js, jsx파일에 룰을 적용
        loader: "babel-loader", // babel-loader 룰을 적용
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()],

  // 출력
  output: {
    path: path.join(__dirname, "dist"), // 현재 폴더에 dist 폴더
    filename: "app.js",
    publicPath: "/dist/",
  },

  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};