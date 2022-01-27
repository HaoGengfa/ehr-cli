/*
 * @Author: Hao
 * @Date: 2021-08-12 19:03:38
 * @Last Modified by: Hao
 */
import axios from 'axios'
import { message } from '@/utils/resetMessage'
import { getToken } from "@/utils/cookie"
import { solveErrorCode } from './responseErrorCode'
import { validInternalServer, validGatewayServer } from './validServer'
const env = process.env.NODE_ENV

/* axios默认配置 */
axios.defaults.withCredentials = true; // 允许携带cookie

/* 创建请求服务*/
const service = axios.create({
  /* 配置项 */
  timeout: 10000
})

/* 获取token */
async function getLocalCookie() {
  // 如果当前域下没有token
  if (!getToken()) {
    // 如果是本地开发模式
    if (env == 'development') {
      message.error('本地开发缺少token,请更改本地编译地址或者手动写入token');
      return false
    }
    // 如果是测试或者生产环境，考虑到IE浏览器无法携带token，故采用接口的方式获取当前token
    else {
      try {
        let res = await axios.post(`${process.env.VUE_APP_GET_TOKEN_URL}/auth/idp/session`)
        // 拿到token
        if (res.data.value) {
          return res.data.value;
        }
        // 否则跳转重定向地址
        else {
          redirectMethod('redirect')()
        }
      }
      catch (e) {
        throw error('无法正常获取到token!')
      }
    }


  }
  // 如果有token，则获取到当前token encodeURIComponent是将token中的特殊字符进行转译
  else {
    return await encodeURIComponent(getToken())
  }
}

// 请求配置
service.interceptors.request.use(
  async (config) => {
    //网关模式
    let idpsession = await getLocalCookie()
    config.headers['_idp_session'] = idpsession;
    // 请求头设置
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    config.headers['cache-control'] = 'no-cache';
    config.headers['Pragma'] = 'no-cache'
    // config.headers['Cookie'] = "_idp_session" + "=" + idpsession;
    return config
  },
  error => {
    return Promise.reject(error)
  })

//响应拦截
service.interceptors.response.use(
  async (response) => {
    const res = response.data
    // 如果是内部服务
    if (res.code) {
     return await validInternalServer(res)
    }
    // 如果是网关服务
    else if(res.respCode){
     return await validGatewayServer(res)
    }
    // 如果服务未连通
    else{
     return await Promise.reject()
    }

  },
  // 响应错误拦截
  error => {
    if (error && error.response) {
      solveErrorCode(error.response.status)
    }

  }
)


export default service