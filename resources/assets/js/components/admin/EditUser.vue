<<template>
	<div class="container">
        <div class="collapse show py-2 mt-5">
            <div class="card">
                <div class="card-block">
                    <h2 class="text-center mt-2">Edit</h2>
                    <div class="offset-sm-2 col-sm-8 alert alert-danger" role="alert" v-if="serverErrors" v-for="error in serverErrors">
                        {{ error[0] }}
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="name" v-model="user.name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="email" v-model="user.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="address" v-model="user.address">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" placeholder="phone" v-model="user.phone">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8 pb-3 pt-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block w-100" @click="editUser">Edit</button>
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
		props: ['user'],
		data () {
        	return {
     //    		user: {
	    //     		name: '',
					// email: '',
					// address: '',
					// phone: '',
     //    		},
    			serverErrors: '',
        	}
        },		

		methods: {
			editUser() {
				const token = this.$store.getters.retrieveToken
				 console.log(this.user)
				axios({
					method: 'post',
					url: '/api/admin/users/updateUser',
	    			headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + token,
					},
					data: {
						name: this.user.name,
	          			email: this.user.email,
	          			address: this.user.address,
	          			phone: this.user.phone,
					}
				})
				.then(response => {
               		console.log(response)
               		// this.$router.push({ name: 'admin.users' })
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