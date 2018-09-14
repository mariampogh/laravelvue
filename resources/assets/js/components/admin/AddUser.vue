<template>
	<div class="container">
        <div class="collapse show py-2 mt-5">
            <div class="card">
                <div class="card-block">
                    <h2 class="text-center mt-2">Add User</h2>
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
                            <input type="password" class="form-control" placeholder="password" v-model="password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8 pb-3 pt-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block w-100" @click="addUser">AddUser</button>
                            <button type="button" class="btn btn-default btn-lg btn-block w-100" @click="close">Close</button>
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
        	return {
        		name: '',
				email: '',
				password: '',
    			serverErrors: '',
        	}
        },		

		methods: {
			addUser() {
				const token = this.$store.getters.retrieveToken

				axios({
					method: 'post',
					url: '/api/admin/users',
	    			headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + token,
					},
					data: {
						name: this.name,
	          			email: this.email,
	          			password: this.password,
					}
				})
				.then(response => {
               		console.log(response)
               		this.$router.push({ name: 'admin.users' })
	        	})
                .catch(error => {
                    this.serverErrors = error.response.data.errors
                })
			} ,
            
            close() {
                this.$router.push({ name: 'admin.users' })
            }
		}
	}
</script>