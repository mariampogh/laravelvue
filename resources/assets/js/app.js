
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './Components/packages/auth/Auth.js'

Vue.use(VueRouter)
Vue.use(Auth)

let Home = require('./components/Home.vue');
let About = require('./components/About.vue');
let LogIn = require('./components/auth/Login.vue');
let Register = require('./components/auth/Register.vue');


const routes = [
	{ path: '/home', component: Home },
	{ path: '/about', component: About },
	{ path: '/logIn', component: LogIn, meta: { forVisitors: true } },
	{ path: '/register', component: Register, meta: { forVisitors: true } },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('test-component', require('./components/Test.vue'));
Vue.component('header-component', require('./components/layouts/Header.vue'));

const app = new Vue({
	el: '#app',
	router,
});
