import { mockPost } from '@/utils/http'
import { mockUrl } from './url'
/******************* 接口应用示例 *******************/

// XXXX(菜单名称)-XXXXX(方法名称)
export function getTableAjax(params) {
    return mockPost(mockUrl.list, params)
}
