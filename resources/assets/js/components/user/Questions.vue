<template>
	<div>
		<div class="container  rounded p-3 mt-3 " style="border:1px solid rgb(23, 162, 184)">
    		<h3 class="border-bottom" style="color:rgb(23, 162, 184);">{{profession}} cv</h3>
	  		<div class="form-group mt-3" v-for="(question in questions">
	  			<label for="disabledTextInput" style="font-weight: bold;">
	  				{{ question.question }}
	  			</label>
      			<input type="text" class="form-control" name ="answear">
      			
    		</div>
      	<button type="submit" class="btn btn-primary">Create</button>
 
	</form>		
</div>
	</div>
</template>

<script>
	export default {
		
		data () {
        	return {
        		profId: '',
        		profession: '',
        		questions: []
        	}
        },
        mounted() {
        	const token = this.$store.getters.retrieveToken
        	const profId = this.$route.params.id
        	
        	axios.get('api/user/questions/' + profId, {
    			headers: {
				    'Accept': 'application/json',
				    'Authorization': 'Bearer ' + token,
				}
    		})
    		.then(response => {
    			console.log(response.data)
    			this.profId = response.data.id
    			this.questions = response.data.questions
    			this.profession = response.data.profession
    		})
        }
        
	}
</script>