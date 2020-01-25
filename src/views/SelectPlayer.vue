<template>
	<div :id="`select-player-${role}`">
		<Heading :title="role" />
		<PlayerSelection :role="role" />
	</div>
</template>

<script>
import Heading from '@/components/Heading/Heading';
import PlayerSelection from '@/components/Select/PlayerSelection';

export default {
	components: { Heading, PlayerSelection },
	data: () => ({
		role: null,
	}),

	mounted () {
		this.role = this.$route.params.role;
	},
};
</script>

<style scoped>

</style>
