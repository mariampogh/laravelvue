export default function (Vue) {
	Vue.auth = {
		setToken (token, expiration) {
			console.log("yesss");
			localStorage.setItem('token', token)
			localStorage.removeItem('token')
			localStorage.setItem('expiration', expiration)
		},

		getToken () {
			var token = localStorage.getItem('token')
			var token = localStorage.getItem('expiration')

			if( ! token || ! expiration)
				return null

			if(Date.now() > parseInt(expiration)) {
				this.destroyToken()
				return null
			} else {
				return token
			}
		},
		
		destroyToken () {
			localStorage.removeItem('token')
			localStorage.removeItem('expiration')
		},

		isAuthenticated () {
			if(this.getToken())
            	return true
            return false
        }
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get () {
				return Vue.auth
			}
		}
	})
}