let d = {}

d.index = [{
  path: '/home/index',
  meta: {
    icon: 'desktop',
    title: '主页'
  },
  component: resolve => require(['../../views/home/index'], resolve)
}]

export default d
