
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

import {store} from './store/index.js'
import routes from './router/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
       name: 'user'
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
       name: 'login'
      })
    } else {
      next()
    }
  } else  if (!to.matched.length) {
    next({
      name: 'notFound'
    })
  } else {
    next() // make sure to always call next()!
  }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('header-component', require('./components/layouts/Header.vue'));
Vue.component('leftMenu', require('./components/admin/LeftMenu.vue'));
// Vue.component('addUser', require('./components/admin/AddUser.vue'));

const app = new Vue({
	el: '#app',
	router,
	store,
});
