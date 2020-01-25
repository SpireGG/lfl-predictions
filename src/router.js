import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{ path: '/team', name: 'totw', component: () => import(/* webpackChunkName: "about" */ '@/views/TeamOfTheWeek') },
		{ path: '/select/:role', name: 'select-player', component: () => import(/* webpackChunkName: "about" */ '@/views/SelectPlayer') },
		{ path: '/:league?', name: 'home', component: Home },
		{ path: '*', redirect: '/' },
	],
	base: process.env.BASE_URL,
});

export default router;
