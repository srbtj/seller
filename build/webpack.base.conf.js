var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')  // 当前项目的根目录

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {  // 入口文件
    app: './src/main.js'
  },
  output: { // 输出配置
    path: config.build.assetsRoot, // 输出目录
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath, // 请求静态资源的绝对路径
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],  // 自动补全路径
    fallback: [path.join(__dirname, '../node_modules')],  // require中找不到时 从node_modules中查找
    alias: { //指定别名
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'common': path.resolve(__dirname,'../src/common')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [  // 对某种类型的文件使用 对应的 loader 进行编译;
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test : /\.less$/,
        loader : ['style','css!less']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,  // 当文件大小 10kb 时  另生成一个文件
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
