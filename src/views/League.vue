<template>
<div class="top-banner">
	<div class="container-fluid">
		<div class="row">
			<div class="* col-md-4 offset-md-1">
				<div class="sticky">
					<div>
						<img alt="LFL logo" :src="`/assets/${league}-logo.png`" class="logo">
						<h1><span style="text-transform: uppercase;">{{ league }}</span> Predictions</h1>
					</div>
					<ladder />
					<router-link :to="{ name: 'league', params: { league: league === 'lfl' ? 'lvp' : 'lfl' } }" class="button">{{ league === 'lfl' ? 'lvp' : 'lfl' }}</router-link>
					<button class="button" @click="resetLadder">Reset</button>
					<a href="//twitter.com/Chypriote" target="_blank" class="button twitter">
						<img src="/assets/picto-twitter-bleu.svg" alt="Twitter">
						<span>Chypriote</span>
					</a>
				</div>
			</div>
			<div class="* col-md-5 offset-md-1" style="height: 100vh;overflow-y: scroll;">
				<div class="row" v-for="week in weeks" :key="`${week.number}${week.day}`">
					<div class="col">
						<week :week="week"></week>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Ladder from '@/components/Ladder.vue';
import Week from '@/components/Week.vue';

export default {
	name: 'league',
	components: {
		Ladder,
		Week,
	},
	computed: {
		league() { return this.$store.state.selected_league; },
		weeks() { return this.$store.state[this.league]['weeks']; },
	},
	methods: {
		resetLadder() { this.$store.commit(`${this.league}/RESET`); },
	},
	mounted() {
		if (this.$route.params.league) {
			this.$store.commit('SELECT_LEAGUE', this.$route.params.league);
		}
	},
	watch: {
		'$route.params.league'(value) {
			this.$store.commit('SELECT_LEAGUE', value);
		},
	},
};
</script>

<style scoped>
.container {
	background-color: #ddd;
}
.sticky {
	position: sticky;
	top: 4rem;
}
.top-banner {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(/declin-particule-left.png?809149183), url(/declin-particule-right.png?809149183), url(/declin-particule-bottom-left.png?809149183), url(/declin-particule-bottom-right.png?809149183), linear-gradient(175deg, #1c1c1c, #0d0d0d);
	background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
	background-position: top left, top right, bottom left, bottom right;
}
.logo {
	height: 15rem;
}
.button {
	background-color: #181818;
	border: 2px solid #ffd866;
	color: #fcd359;
	text-transform: uppercase;
	&:hover {
		background-color: #0d0d0d;
		color: #f1e6d2;
		border: 2px solid #ffd866;
	}
	&.twitter {
    color: #1da1f2;
    text-transform: none;
    span {margin-left: .5rem;}
    img {height: 1rem;}
	}
}
.button + .button {margin-left: 2rem;}
h1 {
		user-select: none;
		font-family: 'Gobold Thin';
		font-size: 38px;
		letter-spacing: 8px;
		margin-bottom: 5px;
		color: #fcd359;
		line-height: normal;
		background-image: linear-gradient(to bottom, #fce293, #b8933a);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		display: block;
		text-align: center;
}
*::-webkit-scrollbar {
  width: 6px;
  background-color: #1e1e1e;
}

*::-webkit-scrollbar-track {
	background-color: #f1e6d2;
}

*::-webkit-scrollbar-thumb {
  background-color: #212529;
}
</style>
