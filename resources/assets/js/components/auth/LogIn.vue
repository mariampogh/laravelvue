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
                    <div class="offset-sm-2 col-sm-8 alert alert-danger" role="alert" v-if="serverError">
                        {{ serverError }}
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
                serverError: '',
        	}
        },

        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    email: this.email,
                    password: this.password,
                })
                .then(response => {
                    this.$store.dispatch('getUserRole')
                    .then(response => {
                        this.$router.push({ name: response.data })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    
                })
                .catch(error => {
                    this.serverError = error
                })
            }    
        }
    }
</script>
