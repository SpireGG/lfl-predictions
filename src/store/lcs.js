import { cloneDeep } from 'lodash-es';
import { teams } from '@/static/teams/lcs';

function initialState() {
	return {
		name: 'LCS Spring 2022',
		teams: cloneDeep(teams),
	};
}

const LCSModule = {
	namespaced: true,
	state: initialState(),
	mutations: {
		UPDATE(state, teams) {
			state.teams = teams;
		},
	},
};

export default LCSModule;
