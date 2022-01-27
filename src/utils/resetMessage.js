/*
 * @Author: Hao
 * @Date: 2021-08-17 00:15:44
 * @Last Modified by: Hao
 * @Last Modified time: 2022-01-25 19:34:17
 * @desc 解决message弹框一直出现的问题
 */
import {
    ElMessage
} from 'element-plus';
let messageInstance = null;
const resetMessage = (options) => {
    if (messageInstance) {
        messageInstance.close()
    }
    messageInstance = ElMessage(options)
};
['error', 'success', 'info', 'warning'].forEach(type => {
        resetMessage[type] = options => {
            if (typeof options === 'string') {
                options = {
                    message: options
                }
            }
            options.type = type
            return resetMessage(options)
        }
    })
export const message = resetMessage