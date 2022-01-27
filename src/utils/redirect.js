// 系统跳转
export function redirectMethod(type) {
    switch (type) {
        // logo跳转
        case 'logo':
            window.location.href = process.env.VUE_APP_LOGORUNURL;
            break;

        // 修改密码
        case 'edit-password':
            window.location.href = process.env.VUE_APP_EDIT_PASSWORD_URL;
            break;
        
        // 退出登录
        case 'logout':
            window.location.href = process.env.VUE_APP_LOGOUT_URL;
            break;

        // 重定向
        case 'redirect':
            window.location.href = process.env.VUE_APP_REDIRECT_URL;
            break;
    }
}