<template>
	<PlayerCard :role="player.role" class="player">
		<template v-slot:image>
			<img :src="player.picture" :alt="player.pseudo" class="player-picture">
		</template>
		<template v-slot:content>
			<div class="player-pseudo">
				{{ player.pseudo }}
			</div>
			<div class="player-names">
				{{ `${player.firstName} ${player.lastName}` }}
			</div>
			<div class="player-team">
				<img :src="player.team.logo" :alt="player.team.name" class="player-team-logo">
				{{ player.team.name }}
			</div>
			<a @click.prevent="removePlayer" class="remove" v-if="deletable">Remove</a>
		</template>
	</PlayerCard>
</template>

<script>
import PlayerCard from '@/components/PlayerCard';

export default {
	components: { PlayerCard },
	props: {
		player: { type: Object },
		deletable: { default: false },
	},
	methods: {
		removePlayer() {
			this.$store.commit('REMOVE_PLAYER', this.player.role);
		},
	},
};
</script>

<style scoped>
	.player-picture {
		padding: 1rem 0 0;
		max-height: 17rem;
	}
	.player-pseudo {
		padding: 0 1rem;
		color: var(--primary);
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}
	.player-names {
		color: white;
		font-weight: bold;
	}
	.player-team {
		display: flex;
		align-items: center;
		justify-content: center;
		img {height: 1rem;margin-right: .25rem;}
		color: lightgray;
	}
	.player {
		position: relative;
	}
	.remove {
		font-size: .8rem;
		position: absolute;
		bottom: .125rem;
		right: .25rem;
	}
</style>
