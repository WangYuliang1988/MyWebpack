Webpack 学习工程

## Webpack 简介及使用

### Webpack 简介
Webpack 是一个前端资源加载/打包工具，根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

### Webpack 安装
前提条件：已安装node环境
1. 创建一个空文件夹，名称任意，如MyWebpack；
2. 在MyWebpack文件夹下，执行命令npm init，用于创建package.json文件；
3. 在MyWebpack文件夹下，执行命令npm install webpack webpack-cli --save-dev，安装Webpack。

### Webpack 使用
1. 在MyWebpack文件夹下，创建一个src文件夹，用于存放待编写的JavaScript文件；
2. 在MyWebpack文件夹下，创建一个dist文件夹，用于存放供浏览器读取的文件，包括index.html文件和webpack打包后生成的js文件；
3. 在MyWebpack文件夹下，创建一个名为webpack.config.js的文件，配置待打包的文件及打包生成的文件名及文件存放路径；
4. 在MyWebpack文件夹下，执行命令node_modules/.bin/webpack，完成打包；
5. 使用浏览器打开index.html，页面正常展示，完成!

### 简化打包命令
在命令行中输入node_modules/.bin/webpack命令有些繁琐，通过以下配置，使用npm run build命令完成包。
1. 打开package.json文件，在scripts项中添加如下配置：
    ```
    "build": "webpack"
    ```
   备注：package.josn中的scripts会按照一定的顺序寻找命令，本地的/node_modules/.bin/路径就在寻找清单中，此处scripts找到命令的对应位置为/node_modules/.bin/webpack
2. 执行命令npm run build，完成打包
3. 使用浏览器打开index.html，页面正常展示，完成!

### 概念解释
#### 模块
Webpack把所有的文件都当作模块进行处理，JavaScript、CSS、图片等每一个文件都是一个模块。

#### loader
Webpack本身只能处理Javascript模块（文件），如果要处理其他类型的模块，如css，就需要用到对应的loader。loader需要通过npm安装并且在webpack.config.js中进行配置。

#### plugin
plugin是用来扩展Webpack功能的，它与loader不同，loader是在打包过程中用来处理源文件的（如js、css等），而plugin作用于整个打包过程，可以实现loader无法实现的复杂功能。