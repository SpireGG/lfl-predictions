import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selected_league: 'lfl',
		language: 'en',
	},
	mutations: {
		TOGGLE_LEAGUE(state) {
			state.selected_league = state.selected_league === 'lvp' ? 'lfl' : 'lvp';
		},
		SELECT_LEAGUE(state, value) {
			state.selected_league = value;
		},
		TOGGLE_LANGUAGE(state, language) {
			state.language = language;
		},
	},
});
