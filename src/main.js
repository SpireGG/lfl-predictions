import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import i18n from './i18n';

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, { id: 'UA-115209665-9', router });

Vue.config.productionTip = false;

new Vue({
	i18n,
	store,
	router,
	render: h => h(App),
}).$mount('#app');
