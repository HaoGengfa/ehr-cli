/*
 * @Author: Hao
 * @Date: 2021-08-13 11:29:52
 * @Last Modified by: Hao
 * @Last Modified time: 2022-01-26 14:46:39
 */
import service from './request'

/* 默认post接口请求 */
export function basePost (url, params) {
  return service.post(`${process.env.VUE_APP_EHRAPI}/${url}`, params)
}


/* 默认mock接口请求 */
export function mockPost (url, params) {
  return service.post(`${process.env.VUE_APP_MOCK_API}/${url}`, params)
}