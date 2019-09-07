// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

// 设置路由
const router = new VueRouter({
	routes:[
		{path:"/",component:Customers},
		{path:"/about",component:About},
		{path:"/add",component:Add},
		{path:"/customer/:id",component:CustomerDetails},
		{path:"/edit/:id",component:Edit}
	],
	mode:"history",
	base:__dirname
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
