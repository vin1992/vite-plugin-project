const TEST_HOST = 'http://gwtest.m.163.com'
const BASE_HOST = 'https://gw.m.163.com'

let host = ''
if (import.meta.env.PROD) {
  host = /^\/163\/test\//.test(location.pathname) ? TEST_HOST : BASE_HOST
}

// 定义接口
const api = {
  info: `${host}/api/info`,
}

export default api
