import { createApp } from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import ElementPlus  from 'element-plus'
import router from '@/router/index.js'
import '@/style/init.css'
import 'element-plus/theme-chalk/index.css';
import config from '@/common/config'
import Mock from 'mockjs'
require('./mock')
const app = createApp(App)
// 挂载全局对象
app.config.globalProperties.$config = config
app.use(ElementPlus).use(router).use(Mock).mount('#app')

