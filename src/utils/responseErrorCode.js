/*
 * @Author: Hao
 * @Date: 2021-11-12 10:09:39
 * @desc: http错误代码
 */

import { message } from '@/utils/resetMessage'

export function solveErrorCode(code) {
    switch (code) {
        case 202: message.error(`错误代码:${code}  错误信息:已经接受请求，但未处理完成`);
            break;
        case 203: message.error(`错误代码:${code}  错误信息:非授权信息`);
            break;
        case 204: message.error(`错误代码:${code}  错误信息:服务器成功处理，但未返回内容`);
            break;
        case 300: message.error(`错误代码:${code}  错误信息:请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端`);
            break;
        case 301: message.error(`错误代码:${code}  错误信息:请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI`);
            break;
        case 302: message.error(`错误代码:${code}  错误信息:资源临时被移动`);
            break;
        case 304: message.error(`错误代码:${code}  错误信息:所请求的资源未修改`);
            break;
        case 307: message.error(`错误代码:${code}  错误信息:临时重定向`);
            break;
        case 400: message.error(`错误代码:${code}  错误信息:客户端请求的语法错误，服务器无法理解`);
            break;
        case 401: message.error(`错误代码:${code}  错误信息:请求要求用户的身份认证`);
            break;
        case 403: message.error(`错误代码:${code}  错误信息:服务器理解请求客户端的请求，但是拒绝执行此请求`);
            break;
        case 404: message.error(`错误代码:${code}  错误信息:请求地址未找到，请检查服务器或者地址`);
            break;
        case 405: message.error(`错误代码:${code}  错误信息:客户端请求中的方法被禁止`);
            break;
        case 406: message.error(`错误代码:${code}  错误信息:服务器无法根据客户端请求的内容特性完成请求`);
            break;
        case 407: message.error(`错误代码:${code}  错误信息:请求要求使用代理授权`);
            break;
        case 408: message.error(`错误代码:${code}  错误信息:服务器等待客户端发送的请求时间过长，超时`);
            break;
        case 408: message.error(`错误代码:${code}  错误信息:服务器等待客户端发送的请求时间过长，超时`);
            break;
        case 500: message.error(`错误代码:${code}  错误信息:服务器内部错误，无法完成请求`);
            break;
        case 501: message.error(`错误代码:${code}  错误信息:服务器不支持请求的功能，无法完成请求`);
            break;
        case 502: message.error(`错误代码:${code}  错误信息:网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应`);
            break;
        case 503: message.error(`错误代码:${code}  错误信息:由于超载或系统维护，服务器暂时的无法处理客户端的请求`);
            break;
        case 504: message.error(`错误代码:${code}  错误信息:网关或代理的服务器，未及时从远端服务器获取请求`);
            break;
        case 505: message.error(`错误代码:${code}  错误信息:服务器不支持请求的HTTP协议的版本，无法完成处理`);
            break;
        default: message.error(`连接出错(${code})`);
    }
    return Promise.reject()
}
