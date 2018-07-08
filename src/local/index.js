import Vue from 'vue'
import VueLs from 'vue-ls'

Vue.use(VueLs, {
  namespace: '_'
})

const JSON = window.JSON
const sessionStorage = window.sessionStorage

export const local = {
  get(name, def) {
    // Returns value under name in local storage. Internally parses the value from JSON before returning it.
    return Vue.ls.get(name, def)
  },
  set(name, value, expire) {
    // Persists value under name in local storage. Internally converts the value to JSON.
    Vue.ls.set(name, value, expire)
  },
  remove(name) {
    // Removes name from local storage. Returns true if the property was successfully deleted, and false otherwise.
    Vue.ls.remove(name)
  },
  clear() {
    // Clears local storage.
    Vue.ls.clear()
  },
  on(name, callback) {
    // Listen for changes persisted against name on other tabs. Triggers callback when a change occurs, passing the following arguments.
    // newValue: the current value for name in local storage, parsed from the persisted JSON
    // oldValue: the old value for name in local storage, parsed from the persisted JSON
    // url: the url for the tab where the modification came from
    Vue.ls.on(name, callback)
  },
  off(name, callback) {
    // Removes a listener previously attached with Vue.ls.on(name, callback).
    Vue.ls.off(name, callback)
  }
}

export const session = {
  get(name) {
    let value = sessionStorage.getItem(name)
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
    return value
  },
  set(name, value) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    return sessionStorage.setItem(name, value)
  },
  remove(name) {
    return sessionStorage.removeItem(name)
  }
}
