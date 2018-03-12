// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router'
import App from './App'
var Vux = require('vux')
// import Vux from 'vux'
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(Router)
Vue.use(Vux)
const router = new Router({
  mode: 'history',
  routes: routerConfig
})
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
