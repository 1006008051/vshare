import Vue from 'vue'
import App from './App.vue'
import vshare from './lib/index.js'
Vue.use(vshare)
new Vue({
  el: '#app',
  render: h => h(App)
})
