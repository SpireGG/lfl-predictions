<template>
	<div id="team-of-the-week">
		<Heading :title="'Week#2'" />
		<TeamContainer :players="players" />
	</div>
</template>

<script>
import Heading from '@/components/Heading/Heading';
import TeamContainer from '@/components/Team/TeamContainer';

export default {
	components: {
		Heading,
		TeamContainer,
	},
	computed: {
		players() {return this.$store.state.selected;},
	},
};
</script>

<style scoped>

</style>
