<template>
	<div class="selection-container">
		<div class="team">
			<div class="container">
				<div class="row">
					<div class="col col-6 col-sm-4 col-md-3" v-for="player in players" :key="player.pseudo">
						<div @click="selectPlayer(player)" class="select-player">
							<div class="overlay">
								<span>Select</span>
							</div>
							<TeamPlayer :player="player" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TeamPlayer from '@/components/Team/TeamPlayer';
import playersList from '@/static/players/players';
import { filter } from 'lodash-es';

export default {
	components: { TeamPlayer },
	props: ['role'],

	computed: {
		players() {return filter(playersList, (player) => player.role === this.role);},
	},
	methods: {
		selectPlayer(player) {
			this.$store.dispatch('SELECT_PLAYER', { player, position: this.role })
				.then(() => {
					this.$router.push({ name: 'totw' });
				});
		},
	},
};
</script>

<style scoped>
	.select-player {
		cursor: pointer;
		position: relative;
		&:hover .overlay {display: flex;}
	}
	.overlay {
		background-color: black;
		position: absolute;
		width: 100%;
		z-index: 10;
		height: 100%;
		opacity: .7;
		display: none;
		align-items: center;
		justify-content: center;
		span {
			font-size: 1.5rem;
			color: var(--primary);
			text-transform: uppercase;
		}
	}
</style>
