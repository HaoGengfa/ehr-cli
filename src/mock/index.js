/*
 * @Author: Hao
 * @Date: 2021-08-29 19:37:05
 * @Last Modified by: Hao
 * @Last Modified time: 2022-01-26 14:25:04
 * @mock服务
 */

const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray = [];

// require.context()工程化引入所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
      let protocol = path.split('|');
      Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});
