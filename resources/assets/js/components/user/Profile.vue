<!-- <template>
	<div class="container">
        <div class="collapse show py-2 mt-5" id="cardLogin">
            <div class="card">
                <div class="card-block">
                    <h2 class="text-center mt-2">User Information</h2>
                    <div class="alert alert-success offset-sm-2 col-sm-8" role="alert" v-if="success">
						{{ success }}
					</div>
                    <div class="offset-sm-2 col-sm-8 alert alert-danger" role="alert" v-if="serverErrors" v-for="error in serverErrors">
                        {{ error[0] }}
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="name" v-model="name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="email" v-model="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="address" v-model="address">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="phone" v-model="phone">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8 pb-3 pt-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block" @click="edit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>	           
  </div>
</template>

<script>
    export default {
        data () {
        	return{
        		id: '5',
        		name: '',
        		email: '',
           		address: '',
           		phone: '',
                serverErrors: '',
                success: ''
        	}
        },

        created() {
	   		const token = this.$store.getters.retrieveToken

    		axios.get('api/user', {
    			headers: {
				    'Accept': 'application/json',
				    'Authorization': 'Bearer ' + token,
				}
    		})
    		.then( response => {
		    	this.name = response.data.name
		    	this.email = response.data.email
				this.address = response.data.address
				this.phone = response.data.phone
	    	})
	    	.catch(error => {
	    		console.log(error.request)
	    	})
		},

        methods: {
        	edit() {
        		const token = this.$store.getters.retrieveToken

				axios({
					method: 'put',
					url: '/api/admin/users',
	    			headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + token,
					},
					data: {
						id: this.id,
						name: this.name,
	          			email: this.email,
	          			address: this.address,
	          			phone: this.phone,
	          			
					}
				})
				.then(response => {
               		console.log(response)
               		// this.$router.push({ name: 'admin.users' })
	        	})
                .catch(error => {
                    this.serverErrors = error.response.data.errors
                })
    		}
        }
    }
</script> -->


<template>
    <div>
        hi profile
    </div>
</template>