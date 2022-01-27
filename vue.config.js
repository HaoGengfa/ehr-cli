"use strict";
const TimeStamp = new Date().getTime();
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  pages:{
    index:{
      entry:'src/main.js'
    }
  },
  publicPath: process.env.VUE_APP_ASSESTPATH,
  lintOnSave: true,
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    host:'local.gttest.com',
    useLocalIp:false,
    port: 9999,
    open: true, //设置true为打开默认浏览器
    proxy: {
      '/api/': {
        target: "/", // API服务所在IP及端口号
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        pathRewrite: {
          '^/mock': '' // 重写路径
        }
      },
      "/http": {      //网关代理 如需要测试生产环境, 则修改为i.gt.cn并重新启动服务
        //  target:"https://i.gt.cn",
        target: "http://10.152.160.25:60001",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/http": "/http"
        },
        secure: false,
      },
    },
    disableHostCheck: true,
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: `static/js/[name].${TimeStamp}.js`,
      chunkFilename: `static/js/[name].${TimeStamp}.js`
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@',path.resolve('src'))
    config.resolve.extensions
      .add('ts')
      .add('tsx');
}
};
