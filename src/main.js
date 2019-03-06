import Vue from 'vue';
import App from './App.vue';
import store from './store';

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, { id: process.env.VUE_APP_google_analytics });

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App),
}).$mount('#app');
