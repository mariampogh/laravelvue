import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		token: localStorage.getItem('access_token') || null,
		user: localStorage.getItem('user'),
	
	},

	getters: {
		loggedIn(state) {
			return state.token !== null
	    },

	    retrieveToken(state) {
			return state.token
	    },

	    retriveUser(state) {
	    	return state.user 
	    }
	},

	mutations: {
		retrieveToken(state, token) {
			state.token = token
		},

		destroyToken(state) {
			state.token = null
		},

		retriveUser(state, user) {
			state.user = user
		},

		destroyUser(state) {
			state.user = null
		},
	},

	actions: {
		retrieveToken(context, credentials) {
			return new Promise((resolve, reject) => {
		        axios.post('/api/login', {
			        email: credentials.email,
			        password: credentials.password,
		        })
	          	.then(response => {
	          		const firstResponse = response
	            	const token = response.data.access_token

	            	localStorage.setItem('access_token', token)
	            	context.commit('retrieveToken', token)

			    	axios.get('/api/user', { 
						headers: {
						    'Accept': 'application/json',
						    'Authorization': 'Bearer ' + token,
						}
					})
					.then(response => {
						const user = response.data.name

						localStorage.setItem('user', user)
		            	context.commit('retriveUser', user)
				
					})

	            	resolve(firstResponse)
	          	})
	          	.catch(error => {
		            reject(error.response.data)
	          	})
	    	})
		},

		destroyToken(context) {
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
			
			if (context.getters.loggedIn) {
				return new Promise((resolve, reject) => {
			        axios.post('/api/logout')
		          	.then(response => {
		            	localStorage.removeItem('access_token')
		          		localStorage.removeItem('user')
		            	context.commit('destroyToken')
		            	context.commit('destroyUser')
		            	resolve(response)
		          	})
		          	.catch(error => {
		          		localStorage.removeItem('access_token')
		          		localStorage.removeItem('user')
		            	context.commit('destroyToken')
		            	context.commit('destroyUser')
			            reject(error)
		          	})
		    	})
			}
		},

		register(context, data) {
      		return new Promise((resolve, reject) => {
        		axios.post('/api/register', {
         			name: data.name,
          			email: data.email,
          			password: data.password,
        		})
          		.then(response => {
            		resolve(response)
          		})
          		.catch(error => {
          			// console.log(error.response)
            		reject(error.response.data.errors)
          		})
      		})
    	},

	    getUserRole(context) {
	    	return new Promise((resolve, reject) => {
		    	axios.get('api/getUserRole', { 
					headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + context.state.token,
					}
				})
		    	.then( response => {
		    		resolve(response)
		    	})
		    	.catch(error => {
		    		reject(error)
		    	})
	    	})
	    },
	}
})