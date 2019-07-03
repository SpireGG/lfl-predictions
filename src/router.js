import Vue from 'vue';
import Router from 'vue-router';
import League from '@/views/League.vue';
// import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: { name: 'league', params: { league: 'lfl' } },
		},
		{
			path: '/:league',
			name: 'league',
			component: League,
		},
	],
});
export default router;
