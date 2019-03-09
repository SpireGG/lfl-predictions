<template>
	<div class="match row">
		<input type="radio" :name="match.id" :value="team_blue.id" v-model="match.winner" />
		<label @click="setWinner(team_blue.id)">
			<img :src="`/assets/${league}/${team_blue.logo}`" :alt="team_blue.name">
			<span class="hide-md">{{ team_blue.name }}</span>
		</label>
		<div class="versus">vs</div>
		<input type="radio" :name="match.id" :value="team_red.id" v-model="match.winner" />
		<label @click="setWinner(team_red.id)">
			<img :src="`/assets/${league}/${team_red.logo}`" :alt="team_red.name">
			<span class="hide-md">{{ team_red.name }}</span>
		</label>
	</div>
</template>

<script>
export default {
	props: [
		'match',
	],
	data: () => ({
		winner: null,
	}),
	computed: {
		league() { return this.$store.state.selected_league; },
		team_blue() { return this.$store.getters[`${this.league}/team`](this.match.team_blue); },
		team_red() { return this.$store.getters[`${this.league}/team`](this.match.team_red); },
	},
	methods: {
		setWinner(winner) {
			this.$store.commit(`${this.league}/SET_WINNER`, { id: this.match.id, winner: winner });
		},
	},
};
</script>

<style>
.versus {
	padding: 0 1rem;
}
.match {
	width: 100%;
	text-align: center;
	display: flex;
	background-color: #1e1e1e;
	color: #f1e6d2;
	box-shadow: 0 1px 2px 0 rgba(50,50,50,.4);

	&.row {margin: 0;}
	label {
		display: flex;
		align-items: center;
		padding: .75rem 1rem;
		margin: 0;
		font-size: 1.2rem;
		flex: 1;
		img { width: 2rem; margin-right: .5rem;}
		&:hover {
			background-color: #191919;
			cursor: pointer;
		}
		&:focus, &:active {
			box-shadow: inset -2px -2px 0px rgba(50,50,50,.4);
		}
	}
	.versus {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
input[type="radio"]:checked + label {
	background-color: #0d0d0d;
	color:#fcd359;
}
input[type="radio"] {
	display: none;
}
</style>
