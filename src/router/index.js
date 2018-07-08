import Router from 'vue-router'
import store from '../store'

// home
import homeIndex from './home/index'


// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/home/index',
    meta: {
    },
    component: resolve => require(['../views/main'], resolve),
    children: [
      ...homeIndex.index
    ]
  }
]

// 滚动行为
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {
      y: 0
    }
  }
}

// 嵌入路由
const router = new Router({
  routes,
  scrollBehavior,
  linkActiveClass: 'active'
})

// 钩子
// router.beforeEach((to, from, next) => {
//   console.log(`%c█ router = ${to.path}`, 'background: rgba(0, 0, 255, 0.1);color: blue')
//   // 更新页面title
//   window.document.title = to.meta.title
//   // 更新app数据
//   store.state('app.routes', routes)
//   // 同步vuex和ls的数据
//   store.actions('me/lsSyncVuex')
//   // 检查是否登陆
//   if (to.path === '/sign') return next()
//   if (store.state('me.token')) return next()
//   next({
//     path: '/sign'
//   })
// })

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
