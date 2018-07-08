import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import Axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  console.log = () => {
    return false // 正式环境不输出 console.log
  }
  Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示
} else {
  Vue.config.devtools = true // 开启devtools调试工具
  Vue.config.debug = true // 开启debug模式
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 响应拦截（配置请求回来的信息）
Axios.interceptors.response.use(
  _response => {
    console.log('%c█ url    = ' + _response.config.url, 'background: rgba(0, 128, 0, 0.1); color: green')
    console.log('%c█ status = ' + _response.status, 'color: green')
    console.log('%c█ data   =', 'color: green', _response.data)
    return _response
  },
  _error => {
    return Promise.reject(_error)
  }
)
