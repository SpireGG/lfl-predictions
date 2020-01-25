<template>
	<div class="team">
		<div class="container">
			<div class="row">
				<div class="col col-15" v-for="player in players" :key="player.uuid">
					<team-player :player="player" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TeamPlayer from '@/components/Team/TeamPlayer';

export default {
	components: {
		TeamPlayer,
	},
	props: ['players'],
};
</script>

<style scoped>
	.team {
		padding: 2rem 0;
	}
</style>
