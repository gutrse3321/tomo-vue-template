import Axios from 'axios'
import store from '../store'

let d = {}

d.config = {
  baseURL: 'https://xxx.com/',
  headers: {
    'X-LC-Id': 'asdasdczxczxcafdszxcxz',
    'X-LC-Key': 'asdvxcvwefrzczxffgdfvxc'
  }
}

d.axios = function(_methods, _path, _data) {
  this.config.headers['X-LC-Session'] = store.state('feedback.sessionToken')
  return Axios.request({
    method: _methods,
    baseURL: this.config.baseURL,
    url: _path,
    data: _data,
    headers: this.config.headers
  })
}

export default {
  /**
   * @param {string} _username
   * @param {string} _password
   */
  login(_username, _password) {
    return d.axios('POST', '/login', {
      username: _username,
      password: _password
    })
  },
  /**
   * @param {string} _username
   * @param {string} _password
   */
  register(_username, _password) {
    return d.axios('POST', '/users', {
      username: _username,
      password: _password
    })
  }
}
