/*
 * @Author: Hao
 * @Date: 2021-11-12 10:35:44
 * @desc: 服务验证
 */
import { message } from '@/utils/resetMessage'
import { runRedirectUrl } from '@/utils/redirect'
// 网关错误代码
const errCode = [20308, 20309, 20310, 'S90004', 'S20307']

// 验证内部服务
export function validInternalServer(res) {
    switch (res.code) {
      // 200 请求成功 内部返回res、网关服务返回res.result
      case 200:
        return res.data
        break;
      // 302 约定需要重定向，且提示关闭后跳转至重定向地址
      case 302:
        message({
          type: 'error',
          duration: 1500,
          message: res.result.msg,
          onClose: () => {
            redirectMethod('redirect')
          }
        })
        break;
      // 返回的其余code状态，统一处理
      default:
        message.error(res.msg || res.result.msg);
        return Promise.reject()
  
    }
  
  }
  
  // 验证网关服务
export  function validGatewayServer(res) {
    switch (res.respCode) {
      // 00000 网关服务验证通过,校验内部服务
      case '00000':
        validInternalServer(res)
        break;
      // 如果返回的网关respCode在网关授权失败code中，则需要重定向
      case errCode.indexOf(res.respCode) !== -1:
        message({
          type: 'error',
          duration: 1500,
          message: '登录信息失效',
          onClose: () => {
            redirectMethod('redirect')
          }
        })
        break;
  
      default:
        message.error(`网关错误代码${res.respCode}  错误内容:${res.respDesc}`);
        return Promise.reject()
  
  
    }
  
  }