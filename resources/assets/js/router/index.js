let Login = require('../components/auth/Login.vue');
let Register = require('../components/auth/Register.vue');
let Logout = require('../components/auth/Logout.vue');
let User = require('../components/user/Index.vue');
let Profile = require('../components/user/Profile.vue');
let Admin = require('../components/admin/Index.vue');
let Users = require('../components/admin/Users.vue');
let AddUser = require('../components/admin/AddUser.vue');
let EditUser = require('../components/admin/EditUser.vue');
let LandingPage = require('../components/layouts/LandingPage.vue');
let NotFound = require('../components/layouts/NotFound.vue');

const routes = [
	{
		path: '/', 
		name: 'landingPage',
		component: LandingPage, 
	},
	{ 
		path: '/login', 
		name: 'login',
		component: Login, 
		meta: {
			requiresVisitor: true
		}
	},
	{ 
		path: '/register', 
		name: 'register',
		component: Register, 
		meta: {
			requiresVisitor: true
		}
	},
	{ 
		path: '/logout',
		name: 'logout', 
		component: Logout, 
		meta: {
			requiresAuth: true
		}
	},
	{ 
		path: '/user',
		name: 'user', 
		component: User, 
		meta: {
			requiresAuth: true,
			// requiresCv: false
		}
	},
	{
    	path: '/user/profile',
    	name: 'user.profile',
      	component: Profile,
      	meta: {
			requiresAuth: true
		}
    },
	{ 
		path: '/admin',
		name: 'admin', 
		component: Admin, 
		meta: {
			requiresAuth: true
		},
		children: [
	        {
	        	path: 'users',
	        	name: 'admin.users',
	          	component: Users,
	          	children: [
	          		{
	          			path: 'addUser',
	          			name: 'admin.users.addUser',
	          			component: AddUser,
	          		},
	          		{
	          			path: 'editUser',
	          			name: 'admin.users.editUser',
	          			component: EditUser,
	          			props: true

	          		}
	          	
	          	],
	        }
      	] 
	},
	{
		path: '/notfound', 
		name: 'notFound',
		component: NotFound, 
	},
]

export default routes;