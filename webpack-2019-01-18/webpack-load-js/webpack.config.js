const path = require('path');
const webpack = require('webpack');
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.join(__dirname, '/async_dist'),
    filename: 'js/[name].[chunkhash:4].js',
    chunkFilename:'js/[name].chunk.js'
  },
  devServer:{//devServer  :       是webpack-dev-server 的一个配置项，port : 表示端口，hot : 是否热重载
    port:3002,
   // hot:true
},
  mode: 'development',
//   optimization: {    
//     splitChunks: { 
//            cacheGroups: {       
//                   //  打包业务中公共代码
//                   common: {
//                         name: "common", 
//                         chunks: "all",        
//                         minSize: 1,      
//                         priority: 0
//                           },       
//                  // 打包node_modules中的依赖库
//                  vendor: { 
//                           name: "vendor", 
//                           test: /[\\/]node_modules[\\/]/, 
//                           chunks: "all", 
//                           minSize: 1, 
//                           priority: 10
//                           }
//                        }
//              }
// },
  module: {},
  plugins: [
   // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    //该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
    new webpack.HashedModuleIdsPlugin()
  ]
};