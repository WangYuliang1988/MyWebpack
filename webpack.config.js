const path = require('path')

module.exports = {
  devtool: "eval-source-map",
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