<template>
<div class="top-banner">
	<div class="container-fluid">
		<div class="row">
			<div class="* col-md-4 offset-md-1">
				<div class="sticky">
					<h1>LFL Predictions</h1>
					<ladder />
					<div class="action">
						<button class="button" @click="resetLadder">{{ $t('ladder.reset') }}</button>
						<button class="button" @click="toggleLanguage">
							<img :src="`/assets/flags/${locale === 'fr' ? 'gb' : 'fr'}.svg`" :alt="locale === 'fr' ? 'English' : 'Français'">
						</button>
					</div>
				</div>
			</div>
			<div class="* col-md-5 offset-md-1">
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
		locale() {return this.$store.state.language;},
	},
	metaInfo() {
		return {
			title: this.league.toUpperCase(),
		};
	},
	methods: {
		resetLadder() { this.$store.commit(`${this.league}/RESET`); },
		toggleLanguage() {
			let lang = this.locale === 'fr' ? 'en' : 'fr';
			this.$store.commit('TOGGLE_LANGUAGE', lang);
			this.$i18n.locale = lang;
		},
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
.sticky {
	position: sticky;
	top: 8rem;
	display: flex;
	flex-direction: column;
}
.top-banner {
	padding-top: 3rem;
	min-height: calc(100vh - 5rem);
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(../static/assets/declin-particule-left.png?809149183), url(../static/assets/declin-particule-right.png?809149183), url(../static/assets/declin-particule-bottom-left.png?809149183), url(../static/assets/declin-particule-bottom-right.png?809149183), linear-gradient(175deg, #1c1c1c, #0d0d0d);
	background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
	background-position: top left, top right, bottom left, bottom right;
}
h1 {
	font-family: sans-serif;
	letter-spacing: 8px;
	margin-bottom: 2rem;
	color: #fcd359;
}
</style>
