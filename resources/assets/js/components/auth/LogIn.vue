<template>
	<div class="container">
        <div class="collapse show py-2 mt-5" id="cardLogin">
            <div class="card">
                <div class="card-block">
                    <h2 class="text-center mt-2">Login</h2>
                    <ul class="list-inline text-center">
                        <li class="list-inline-item">
                            <a class="btn btn-lg" href="" title="Twitter"><i class="fa fa-2x fa-twitter"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-lg" href="" title=""><i class="fa fa-2x fa-google-plus"></i></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-lg" href="" title="Facebook"><i class="fa fa-2x fa-facebook"></i></a>
                        </li>
                    </ul>
                    <div class="form-group row">
                        <label for="inputEmailForm" class="sr-only control-label">Email</label>
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" id="inputEmailForm" placeholder="email" v-model="email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPasswordForm" class="sr-only control-label">Password</label>
                        <div class="offset-sm-2 col-sm-8">
                            <input type="text" class="form-control" id="inputPasswordForm" placeholder="password" v-model="password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-8 pb-3 pt-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block" @click="login">Login</button>
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
        		email: '',
           		password: '',
        	}
        },

        methods: {
        	login () {
        		var data = {
        			client_id: 2,
        			client_secret: '2Z9gWrNtf69nBnf6emXK2Jb1sioIe46qnW9hcIhU',
        			grant_type: 'password',
        			username: this.email,
        			password: this.password
        		}

        		axios.post("/oauth/token", data)
        			.then(response => {
                        console.log(response);
                        console.log(response.data.access_token);
                        console.log(response.data.expires_in);
        				this.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
        		    })
                    .catch(function (error) {
                        console.log(error)
                    })
        	},

            
        }
    }
</script>
