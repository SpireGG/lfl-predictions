<template>
	<div class="tiebreakers">
		<h3>{{ $t('tiebreakers') }}</h3>
		<div v-for="(tiebreak, index) in tiebreaks" :key="index" class="tiebreak row">
			<div class="col">
				<div class="team">
					<div class="name">
						<img :src="`/assets/${league}/${tiebreak[0].logo}`" :alt="tiebreak[0].name">
						{{ tiebreak[0].name }}
					</div>
					<div class="result">
						{{ getCount(getResults(tiebreak), tiebreak[0].id) }} - {{ getCount(getResults(tiebreak), tiebreak[1].id) }}
					</div>
					<div class="name">
						<img :src="`/assets/${league}/${tiebreak[1].logo}`" :alt="tiebreak[1].name">
						{{ tiebreak[1].name }}
					</div>
				</div>

				<template v-if="tiebreak.length > 2">
					<div class="team">
						<div class="name">
							<img :src="`/assets/${league}/${tiebreak[1].logo}`" :alt="tiebreak[1].name">
							{{ tiebreak[1].name }}
						</div>
						<div class="result">
							{{ getCount(getResults(tiebreak, 1), tiebreak[1].id) }} - {{ getCount(getResults(tiebreak, 1), tiebreak[2].id) }}
						</div>
						<div class="name">
							<img :src="`/assets/${league}/${tiebreak[2].logo}`" :alt="tiebreak[2].name">
							{{ tiebreak[2].name }}
						</div>
					</div>
					<div class="team">
						<div class="name">
							<img :src="`/assets/${league}/${tiebreak[2].logo}`" :alt="tiebreak[2].name">
							{{ tiebreak[2].name }}
						</div>
						<div class="result">
							{{ getCount(getResults(tiebreak, 2), tiebreak[2].id) }} - {{ getCount(getResults(tiebreak, 2), tiebreak[0].id) }}
						</div>
						<div class="name">
							<img :src="`/assets/${league}/${tiebreak[0].logo}`" :alt="tiebreak[0].name">
							{{ tiebreak[0].name }}
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { find } from 'lodash-es';

export default {
	computed: {
		weeks() { return this.$store.state[this.league]['weeks']; },
		league() { return this.$store.state.selected_league; },
		tiebreaks() {return this.$store.getters[`${this.league}/tiebreaks`];},
	},
	methods: {
		getResults(tiebreak, value) {
			let teamA, teamB;
			if (!value) { teamA = tiebreak[0]; teamB = tiebreak[1]; }
			if (value === 1) { teamA = tiebreak[1]; teamB = tiebreak[2]; }
			if (value === 2) { teamA = tiebreak[2]; teamB = tiebreak[0]; }

			const results = [];

			this.weeks.forEach(week => {
				const item = find(week.matchs, match => {
					return (match.team_blue === teamA.id && match.team_red === teamB.id) || (match.team_red === teamA.id && match.team_blue === teamB.id);
				});

				if (item) {
					results.push(item);
				}
			});

			return results;
		},
		getCount(results, id) {return (results.filter(item => item.winner === id)).length;},
	},
};
</script>

<style scoped>
h3 {
  color: #fcd359;
}
.tiebreakers {
	margin-bottom: 2rem;
}
.tiebreak {
	text-align: center;
	display: flex;
	color: #f1e6d2;
}
.team {
	display: flex;
	background-color: #1e1e1e;
	box-shadow: 0 1px 2px 0 rgba(50,50,50,.4);
	padding: .5rem;
	.name {
		flex: 1;
		text-align: left;
		padding-left: 2rem;
		img {
			width: 2rem;
			margin-right: .5rem;
		}
	}
}
</style>
