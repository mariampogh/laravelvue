<template>
	<div class="container">
		<div class="col-10 float-left mt-5 ml-5">
			<div style = "margin-left:3%">
				<h3 class="border-bottom">Users <span class="badge badge-info text-light">{{ meta.total }}</span></h3>
				<router-link :to="{ name: 'admin.users.addUser' }" class="text-primary d-inline-block">
					<i class="fa fa-plus btn" aria-hidden="true" style="font-size: 200%;"  ></i>
				</router-link>
			</div>

			<router-view></router-view>

			<table class="table table-striped mt-3" style = "margin-left:3%">
				<thead>
			    	<tr>
			    		<th scope="col">#</th>
			      		<th scope="col">UserName</th>
			      		<th scope="col">Email</th>
			      		<th scope="col">Edit</th>
			      		<th scope="col">Delete</th>
			    	</tr>
			  	</thead>
			  	<tbody>
				    	<tr v-for="(user, index) in users">
				      		<td scope="row">{{ ++index + (meta.current_page-1)*10}}</td>
				      		<td>{{ user.name }}</td>
							<td>{{ user.email }}</td>
							<td>
								<router-link :to="{ name: 'admin.users.editUser', params: {user: user}}" c>
									<button type = "submit" class="btn btn-primary" @click="close">
										<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
									</button>
								</router-link>
							</td>
				      		<td>
				      			<button type="button" class="btn btn-danger delete" @click="deleteUser(user.id)">
				      				<i class="fa fa-trash-o" aria-hidden="true"></i>
				      			</button>
				      		</td>
				    	</tr>
			    
			  	</tbody>
			</table>
			
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
			    	<li class="page-item" >
			      		<a class="page-link" @click="getPaginatedUsers(links.prev)">Previous</a>
			   		</li>
			    	<li class="page-item page-link" @click="getPaginatedUsers(links.first)" v-if="meta.first_page">{{ meta.first_page }}</li>
			    	<li class="page-item active"><a class="page-link">{{ meta.current_page}}</a></li>
  					<li class="page-item">...</li>
			    	<li class="page-item page-link" @click="getPaginatedUsers(links.last)">{{ meta.last_page }}</li>
			    	<li class="page-item">
			      		<a class="page-link" @click="getPaginatedUsers(links.next)">Next</a>
			    	</li>
			 	</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
        	return {
        		users: [],
        		links: {},
        		meta: {},
        	}
        },		
        
        created() {
	   		const token = this.$store.getters.retrieveToken

    		axios.get('api/admin/users', {
    			headers: {
				    'Accept': 'application/json',
				    'Authorization': 'Bearer ' + token,
				}
    		})
    		.then( response => {
	    		console.log(response)
		    	this.users = response.data.data
				this.links = response.data.links
				this.meta = response.data.meta
	    	})
	    	.catch(error => {
	    		console.log(error)
	    	})
		},

		methods: {
			getPaginatedUsers(link) {
				const token = this.$store.getters.retrieveToken

				axios.get(link, {
	    			headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + token,
					}
	    		})
	    		.then( response => {
		    		this.users = response.data.data
					this.links = response.data.links
					this.meta = response.data.meta
		    	})
		    	.catch(error => {
		    		console.log(error)
		    	})
			},

			deleteUser(id) {
				const token = this.$store.getters.retrieveToken

				axios.delete('/api/admin/users/' + id, {
	    			headers: {
					    'Accept': 'application/json',
					    'Authorization': 'Bearer ' + token,
					}
	    		})
	    		.then( response => {
	    			console.log(response)
	    			const index = this.users.indexOf(response.data);
    				this.users.splice(index, 1)
    				this.meta.total--
		    	})
		    	.catch(error => {
		    		console.log(error)
		    	})
			},

			close() {
                this.$router.push({ name: 'admin.users' })
            }
		}
	}
</script>