import Vuex from 'vuex'
import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'

if (debug) {
  console.log('%c█ store =', 'background: rgba(0, 0, 255, 0.1);color: browm', modules)
}

let store = new Vuex.Store({
  modules,
  strict: debug // 严格模式
})

export default {
  state(_type, _payload) {
    let _path = _type.split('.')
    let _state = store.state
    for (let i = 0; i < _path.length; i++) {
      // 获取state
      if (_state[_path[i]] != undefined) {
        _state = _state[_path[i]]
      } else {
        _state = undefined
      }
    }
    if (_payload != undefined && _path.length == 2) {
      // 修改state
      store.commit({
        type: _path[0] + '/_set',
        key: _path[1],
        val: _payload
      })
    }
    return _state
  },
  commit(_type, _payload) {
    return store.commit(_type, _payload)
  },
  actions(_type, _payload) {
    return store.dispatch(_type, _payload)
  }
}
