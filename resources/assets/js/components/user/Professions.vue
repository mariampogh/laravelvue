<template>
	<div class="container">
		<h4 class="text-secondary bold mt-5">
            Choose your profession
        </h4>
		<ul class="list-group mt-5">
			<li v-for="profession in professions" class="list-group-item list-group-item-primary" @click="questions(profession.id)"> 
  				<a class="dropdown-item" >
		    		{{ profession.profession }}
		    	</a>
			</li>
	    </ul>
	</div>
</template>
<script>
	export default {
		data () {
        	return {
        		professions: [],
        	}
        },		
        
        created() {
	   		const token = this.$store.getters.retrieveToken

    		axios.get('api/user/professions', {
    			headers: {
				    'Accept': 'application/json',
				    'Authorization': 'Bearer ' + token,
				}
    		})
    		.then( response => {
    			this.professions = response.data
	    		console.log(response)
		    	
	    	})
	    	.catch(error => {
	    		console.log(error)
	    	})
		},

		methods: {
			questions(id) {
    			this.$router.push({name: 'user.questions', params: {id: id}})
			}
		}
		
	}
</script>