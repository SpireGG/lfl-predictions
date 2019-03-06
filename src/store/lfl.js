import { find, map, each } from 'lodash-es';
import { teams } from '@/static/lfl/teams';
import { weeks } from '@/static/lfl/weeks';

function initialState() {
	return {
		teams,
		weeks,
	};
}

const LFLModule = {
	namespaced: true,
	state: initialState,
	mutations: {
		SET_WINNER(state, payload) {
			each(state.weeks, week => {
				each(week.matchs, match => {
					if (match.id === payload.id) {
						match.winner = payload.winner;
					}
				});
			});
		},
		RESET(state) {
			const s = initialState();
			Object.keys(s).forEach(key => {
				state[key] = s[key];
			});
		},
	},
	actions: {
	},
	getters: {
		team: (state) => (id) => {
			return find(state.teams, team => team.id === id);
		},
		ladder: (state) => {
			return map(state.teams, team => {
				//Dirty thing to find total wins and losses
				let losses = team.losses;
				let wins = team.wins;
				each(state.weeks, week => {
					each(week.matchs, match => {
						if (match.winner !== null && (match.team_blue === team.id || match.team_red === team.id)) {
							match.winner === team.id ? wins++ : losses++;
						}
					});
				});
				return Object.assign({}, team, { wins, losses });
			});
		},
	},
};

export default LFLModule;
