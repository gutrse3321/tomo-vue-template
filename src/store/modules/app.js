const state = {
  routes: {} // 所有路由
}

const getters = {}

const mutations = {
  _set(state, _payload) {
    state[_payload.key] = _payload.val
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
