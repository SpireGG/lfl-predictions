import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '/:league?', name: 'home', component: Home },
		{ path: '*', redirect: '/' },
	],
});

export default router;
