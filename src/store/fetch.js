import { request } from '@mf2e/js-bridge-helper'

/**
 * 发送fetch请求
 * @param {Object} config
 *  {
 *    method: 请求方法（默认get）
 *    url: 请求url
 *    params: get请求参数
 *    headers: 请求头
 *    data: post请求参数
 *    contentType: 请求内容类型
 *    responseType: 响应数据类型
 *    timeout: 超时时长，默认15秒
 *    withoutHeaders: 不追加客户端头部
 *  }
 */
async function fetch(config = {}) {
  // 发送fetch请求
  let result
  try {
    result = await request(Object.assign({ withoutHeaders: import.meta.env.DEV }, config))
  } catch (e) {
    e.message = '网络请求错误'
    throw e
  }

  const { data, code, message } = result || {}
  // 处理错误返回结果
  if (!data && code !== 0) {
    switch (code) {
      default:
        break
    }

    const e = new Error('接口返回错误:' + message)
    e.code = code
    throw e
  }

  return data
}

export default fetch
