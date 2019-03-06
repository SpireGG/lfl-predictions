<template>
	<div class="week">
		<h3>Semaine {{ week.number }} - Jour {{ week.day }} </h3>
		<div class="match-week">
		<match v-for="match of week.matchs" :match="match" :key="match.id" />
	</div>
	</div>
</template>

<script>
import Match from '@/components/Match.vue';
export default {
	props: [
		'week',
	],
	components: {
		Match,
	},
};
</script>

<style scoped>
	.week {
		margin-top: 2rem;
		&:last-of-type {margin-bottom: 2rem;}
	}
	h3 {
		color: #fcd359;
	}
	.match-week {
		border: 1px solid #999485;
	}
</style>
