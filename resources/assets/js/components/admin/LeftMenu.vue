<template>
    <div class="row  col-2 navbar-dark bg-dark float-left ml-0">
        <nav class="sidebar">
            <ul class="nav nav-pills flex-column">
                <li class="nav-item">
                    <i class="fa fa-user-plus text-light" aria-hidden="true"></i>
                    <router-link :to="{ name: 'admin.users' }" class="nav-link text-light d-inline-block">Users</router-link>
                </li>
                <li class="nav-item">
                    <i class="fa fa-bar-chart text-light" aria-hidden="true"></i>
                    <router-link :to="{ }" class="nav-link text-light d-inline-block">Stats</router-link>
                </li>
            </ul>
        </nav>       
    </div>
</template>
 
