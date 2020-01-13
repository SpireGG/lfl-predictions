import { cloneDeep } from 'lodash-es';
import { teams } from '@/static/teams/lec';

function initialState() {
	return {
		name: 'LEC Spring 2020',
		teams: cloneDeep(teams),
	};
}

const LECModule = {
	namespaced: true,
	state: initialState(),
	mutations: {
		UPDATE(state, teams) {
			state.teams = teams;
		},
	},
};

export default LECModule;
