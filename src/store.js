import Vue from 'vue';
import Vuex from 'vuex';

import lfl from '@/store/lfl';
import div2 from '@/store/div2';
import lec from '@/store/lec';
import lcs from '@/store/lcs';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selected_league: 'lfl',
		language: 'en',
	},
	getters: {
		league_name: state => state[state.selected_league]['name'],
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
		lfl,
		div2,
		lec,
		lcs,
	},
});
