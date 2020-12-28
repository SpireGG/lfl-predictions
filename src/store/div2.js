import { cloneDeep } from 'lodash-es';
import { teams } from '@/static/teams/div2';

function initialState() {
	return {
		name: 'Division 2 2021',
		teams: cloneDeep(teams),
	};
}

const DIV2Module = {
	namespaced: true,
	state: initialState(),
	mutations: {
		UPDATE(state, teams) {
			state.teams = teams;
		},
	},
};

export default DIV2Module;
