/*
 * @Author: webees [hi@webees.net]
 * @Date: 2017-03-17 23:07:41
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-29 21:06:09
 */

// 睡眠（毫秒）
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 *  获取Dom元素
 *  @param return
 */
export const $ = document.querySelector.bind(document)

// 删除左右两端的空格
export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

// 删除所有空格
export function trimAll(str) {
  return str.replace(/\s/g, '')
}

// 小于10，补0函数，常用于时间结构
export function addZero(num) {
  return num < 10 ? '0' + num : num
}

// 关闭当前标签页
export function closeWin() {
  window.opener = null
  window.open('', '_self')
  window.close()
}

// url 跳转，is_full 是否为 绝对路径
export function urlTarget(url, is_full = false) {
  if (is_full) {
    top.location.href = url
  } else {
    top.location.href = window.location.protocol + '//' + window.location.host + url
  }
}

// 异步加载js，id属性防止重复加载
export function loadJS(url, id = null) {
  let d = document
  let s = 'script'
  let js
  let fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  if (id != null) js.id = id
  js.src = url
  fjs.parentNode.insertBefore(js, fjs)
}

/*
 * 时间戳转世界时间，传入时间单位秒
 * @format: 时间字符串 'yyyy-MM-dd EEE hh:mm:ss'
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * 'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 * 'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 */
export function stamp2utc(time, format) {
  format = format === undefined ? 'yyyy-MM-dd hh:mm:ss' : format
  let _date = new Date()
  _date.setTime(time)
  let o = {
    'M+': _date.getMonth() + 1, // 月份
    'd+': _date.getDate(), // 日
    'h+': _date.getHours(), // 小时
    'm+': _date.getMinutes(), // 分
    's+': _date.getSeconds(), // 秒
    'q+': Math.floor((_date.getMonth() + 3) / 3), // 季度
    'S': _date.getMilliseconds() // 毫秒
  }
  if (/(y+)/i.test(format)) format = format.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  }
  return format
}

export function stamp2local(_timestamp) {
  return (new Date(_timestamp * 1000)).toLocaleString()
}

// 获取URL参数
export function urlQuery(name) {
  var reg = new RegExp('(^|&)?' + name + '=([^&]*)(&|$)')
  var r = window.location.href.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 去除非数字字符
export function onlyNum(str) {
  if (str != null) return str.replace(/[^\d]/ig, '') //.replace(/^0+/,'') // 数字前面的零不去除，【bug】验证码前面的零被去除导致验证码错误
}

// 获取当前时间戳，精确到毫秒
export function nowTimestamp() {
  return (new Date()).valueOf()
}

// 格式化数字，例如 5264887 => 5,264,887
export function parseNum(str) {
  return parseFloat(str).toLocaleString()
}

/**
 *  获取平台信息
 *  @param {String} types win32(windows) || darwin(mac)
 *  @param return
 */
export function platforms(types) {
  const platform = require('os').platform()
  if (types === 'darwin' || types === 'win32') {
    return platform === types
  }
  return undefined
}

/**
 *  判断对象是否为空
 *  @param {Object} obj 对象
 *  @param return
 */
export function isNullObject(obj) {
  for (let i in obj) {
    return false
  }
  return true
}

/**
 * 获取随机数
 *
 * @export
 * @param {any} minNum
 * @param {any} maxNum
 * @returns
 */
export function randomNum(minNum, maxNum) {
  if (arguments.length == 1) return parseInt(Math.random() * minNum + 1, 10)
  else if (arguments.length == 2) return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  else return 0
}

/**
 * 深度拷贝对象
 * @param {*} obj
 */
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
