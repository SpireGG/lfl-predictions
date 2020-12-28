import { cloneDeep } from 'lodash-es';
import { teams } from '@/static/teams/lfl';

function initialState() {
	return {
		name: 'LFL Spring 2021',
		teams: cloneDeep(teams),
	};
}

const LFLModule = {
	namespaced: true,
	state: initialState(),
	mutations: {
		UPDATE(state, teams) {
			state.teams = teams;
		},
	},
};

export default LFLModule;
