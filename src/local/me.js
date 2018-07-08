import {
  local
} from './index'

let d = {}
let namespace = 'me' // 命名空间

d.get = (key, def) => {
  key = `${namespace}_${key}`
  return local.get(key, def)
}

/**
 *
 * @param {*} key
 * @param {*} val
 * @param {*} exp 单位秒
 */
d.set = (key, val, exp) => {
  key = `${namespace}_${key}`
  return local.set(key, val, exp * 1000)
}

export default d
