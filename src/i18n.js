import Vue from 'vue';
import VueI18n from 'vue-i18n';

import fr from './translations/messages.fr.yml';
import en from './translations/messages.en.yml';

Vue.use(VueI18n);

const messages = {
	en,
	fr,
};

export default new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages,
});
