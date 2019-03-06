import Vue from 'vue';
import Vuex from 'vuex';
import { find, map, each } from 'lodash-es';

Vue.use(Vuex);

function initialState() {
	return {
		teams: [
			{
				id: 1,
				name: "Team-LDLC",
				wins: 10,
				losses: 0,
				logo: "team-ldlc.png",
			},
			{
				id: 2,
				name: "GamersOrigin",
				wins: 7,
				losses: 3,
				logo: "gamersorigin.png",
			},
			{
				id: 3,
				name: "Misfits Premier",
				wins: 6,
				losses: 4,
				logo: "misfits.png",
			},
			{
				id: 4,
				name: "against All authority",
				wins: 4,
				losses: 6,
				logo: "aaa.png",
			},
			{
				id: 5,
				name: "ROG Esport",
				wins: 5,
				losses: 5,
				logo: "rogesport.png",
			},
			{
				id: 6,
				name: "Vitality.Bee",
				wins: 4,
				losses: 6,
				logo: "vitality.png",
			},
			{
				id: 7,
				name: "Solary",
				wins: 2,
				losses: 8,
				logo: "solary.png",
			},
			{
				id: 8,
				name: "Team MCES",
				wins: 2,
				losses: 8,
				logo: "mces.png",
			},
		],
		weeks: [
			{
				number: 6,
				day: 2,
				matchs: [
					{ id: 621, team_blue: 5, team_red: 2, winner: null },
					{ id: 622, team_blue: 1, team_red: 8, winner: null },
					{ id: 623, team_blue: 4, team_red: 6, winner: null },
					{ id: 624, team_blue: 3, team_red: 7, winner: null },
				],
			},
			{
				number: 7,
				day: 1,
				matchs: [
					{ id: 711, team_blue: 1, team_red: 2, winner: null },
					{ id: 712, team_blue: 4, team_red: 5, winner: null },
					{ id: 713, team_blue: 3, team_red: 7, winner: null },
					{ id: 714, team_blue: 8, team_red: 6, winner: null },
				],
			},
			{
				number: 7,
				day: 2,
				matchs: [
					{ id: 721, team_blue: 4, team_red: 2, winner: null },
					{ id: 722, team_blue: 3, team_red: 1, winner: null },
					{ id: 723, team_blue: 8, team_red: 5, winner: null },
					{ id: 724, team_blue: 6, team_red: 7, winner: null },
				],
			},
			{
				number: 8,
				day: 1,
				matchs: [
					{ id: 811, team_blue: 3, team_red: 2, winner: null },
					{ id: 812, team_blue: 8, team_red: 4, winner: null },
					{ id: 813, team_blue: 6, team_red: 1, winner: null },
					{ id: 814, team_blue: 7, team_red: 5, winner: null },
				],
			},
		],
	};
}

export default new Vuex.Store({
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
});
