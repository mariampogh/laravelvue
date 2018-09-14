<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	    	<span class="navbar-toggler-icon"></span>
	  	</button>
	  	<router-link :to="{ name: 'landingPage' }" class="navbar-brand">CreateCV</router-link>
	  	<div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
            	<li class="nav-item" v-if="loggedIn">
	        		<router-link :to="{  name: 'user.profile' }" class="nav-link">{{ user }}</router-link>
	      		</li>
	      		<li class="nav-item" v-if="loggedIn">
	        		<router-link :to="{ }" class="nav-link">cv</router-link>
	      		</li>
            </ul>
        </div>
	  	<div class="collapse navbar-collapse" id="navbarCollapse">
	    	<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
	      		<li class="nav-item" v-if="!loggedIn">
	       			<router-link :to="{ name: 'login' }" class="nav-link">LogIn</router-link>
	      		</li>
	      		<li class="nav-item" v-if="!loggedIn">
	        		<router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
	      		</li>
	      		<li class="nav-item" v-if="loggedIn">
	        		<router-link :to="{ name: 'logout' }" class="nav-link">LogOut</router-link>
	      		</li>
	    	</ul>
	  	</div>
	</nav>
</template>
<script >

	export default {	
		computed: {
			loggedIn() {
				return this.$store.getters.loggedIn
			},

			user() {
				return this.$store.getters.retriveUser
			}

		}
	}
</script>
