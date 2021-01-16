## webpack 5 && webpack-cli 4

```
npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
npm i -D webpack-dev-server
```

```json
// package.json
"scripts": {
    "build": "webpack",
    "dev": "webpack server --env development",
},
```

```js
// webpack.config.js
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
    publicPath: "/dist/", // devServer-publicPath와 같게 한다
  },

  devServer: {
    publicPath: "/dist/", // output-publicPath와 같게 한다
    hot: true,
  },
};
```



---

## webpack && babel

```
npm i -D webpack webpack-cli
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i -D @babel/plugin-proposal-class-properties
```

```
babel/core: 최신 문법을 브라우저 호환성에 맞게 옛날 문법으로 바꿔줌
babel/preset-env: 환경에 맞게 바꿔줌
babel/preset-react: jsx 지원
babel-loader: babel과 webpack 연결
babel/plugin-proposal-class-properties: class 문법 바꿔줌
```

```html
// index.html
<body>
  <div id="root"></div>
  <script src="./dist/app.js"></script>
</body>
```

```js
// webpack.config.js
const path = require('path');
const { env } = require('process');

module.exports = {
  name: "wordreplay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", "jsx"], // js, jsx파일 대상
  },
  // 입력
  entry: {
    app: ["./src/App"], // ./src/App.js 파일만 webpack 적용
  },

  module: {
    rules: [
      {
        test: /\.jsx?/, // js, jsx파일에 룰을 적용
        loader: "babel-loader", // babel-loader 룰을 적용
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  // 출력
  output: {
    path: path.join(__dirname, "dist"), // 현재 폴더에 dist 폴더
    filename: "app.js",
  },
};
```



---

## this.setState 렌더링

```
this.setState({});
```

- setState() 함수 실행할 때마다 렌더링이 된다.