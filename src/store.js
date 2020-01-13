import Vue from 'vue';
import Vuex from 'vuex';

import lec from '@/store/lec';
import lfl from '@/store/lfl';
import lvp from '@/store/lvp';
import eslm from '@/store/eslm';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selected_league: 'lec',
		language: 'en',
	},
	mutations: {
		SELECT_LEAGUE(state, value) {
			state.selected_league = value;
		},
		TOGGLE_LANGUAGE(state, language) {
			state.language = language;
		},
	},
	modules: {
		lec,
		lfl,
		lvp,
		eslm,
	},
});
