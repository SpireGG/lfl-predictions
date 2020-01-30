import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import lfl from '@/store/lfl';
import div2 from '@/store/div2';
import lec from '@/store/lec';
import lcs from '@/store/lcs';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

export default new Vuex.Store({
	plugins: [vuexLocal.plugin],
	state: {
		selected_league: 'lfl',
		language: 'en',
		selected: {
			top: null,
			jungle: null,
			mid: null,
			bottom: null,
			support: null,
		},
		last_saved: false,
	},
	getters: {
		league_name: state => state[state.selected_league]['name'],
		selectedTop: state => state.selected.top,
		selectedJungle: state => state.selected.jungle,
		selectedMid: state => state.selected.mid,
		selectedBottom: state => state.selected.bottom,
		selectedSupport: state => state.selected.support,
	},
	mutations: {
		SELECT_LEAGUE(state, value) {
			state.selected_league = value;
		},
		TOGGLE_LANGUAGE(state, language) {
			state.language = language;
		},
		async SELECT_PLAYER(state, payload) {
			state.selected[payload.position] = payload.player;
		},
		async REMOVE_PLAYER(state, position) {
			state.selected[position] = null;
		},
		SET_LAST_SAVED(state) {
			state.last_saved = new Date();
		},
	},
	actions: {
		async SELECT_PLAYER({ commit }, selection) {
			return await commit('SELECT_PLAYER', selection);
		},
	},
	modules: {
		lfl,
		div2,
		lec,
		lcs,
	},
});
