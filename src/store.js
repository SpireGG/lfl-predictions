import Vue from 'vue';
import Vuex from 'vuex';

import lfl from '@/store/lfl';
import lvp from '@/store/lvp';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selected_league: 'lfl',
	},
	mutations: {
		TOGGLE_LEAGUE(state) {
			state.selected_league = state.selected_league === 'lvp' ? 'lfl' : 'lvp';
		},
		SELECT_LEAGUE(state, value) {
			state.selected_league = value;
		},
	},
	modules: {
		lfl,
		lvp,
	},
});
