const path = require('path')

module.exports = {
  mode: "production", // https://webpack.js.org/configuration/mode/
  devtool: "source-map", // https://webpack.js.org/configuration/devtool/
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ // 配置Loaders
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }]
  }
};