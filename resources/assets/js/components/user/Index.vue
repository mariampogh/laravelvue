<template>
	<div class="container">
       <div class="dropdown">
			<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
		    	Choose your profession
			</button>
			<!-- <div class="dropdown-menu">
				<ul class="list-group">
					@foreach($professions as $profession)
	  					<li class="list-group-item list-group-item-primary">
			  				<a class="dropdown-item" href="{{ route('blankCv', $profession->id) }}">
					    		{{ $profession->profession }}
					    	</a>
	  					</li>
			    	@endforeach
			    </ul>
			</di> -->
    </div>

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

    		axios.get('api/professions', {
    			headers: {
				    'Accept': 'application/json',
				    'Authorization': 'Bearer ' + token,
				}
    		})
    		.then( response => {
	    		console.log(response)
		    	
	    	})
	    	.catch(error => {
	    		console.log(error)
	    	})
		},
		
	}
</script>