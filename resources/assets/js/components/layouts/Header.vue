<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <a class="navbar-brand" href="#">CreateCV</a>

	  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
	    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
	      <li class="nav-item">
	       <router-link to="/logIn" class="nav-link">LogIn</router-link>
	      </li>
	      <li class="nav-item">
	        <router-link to="/register" class="nav-link">Register</router-link>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>