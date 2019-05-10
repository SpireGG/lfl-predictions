import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import './icons';

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, { id: 'UA-115209665-9', router });

import LolprosLogo from '@/components/LolprosLogo';
Vue.component('lolpros-logo', LolprosLogo);

import VModal from 'vue-js-modal';
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
