import Axios from 'axios'
import store from '../store'

let d = {}
/**
 * 配置参数
 */
d.config = {
  baseURL: 'https://your.domainname.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
}

if (process.env.NODE_ENV !== 'production') d.config.baseURL = 'http://localhost:3000/v1'

/**
 * 发送请求
 * @param {*} _method 必须大写
 * @param {*} _url
 * @param {*} _data
 */
d.axios = function(_method, _path, _data) {
  this.config.headers['Authorization'] = store.state('me.token')
  return Axios.request({
    method: _method,
    baseURL: this.config.baseURL,
    url: _path,
    data: _data,
    headers: this.config.headers
  })
}

export default d
