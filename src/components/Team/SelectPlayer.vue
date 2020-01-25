<template>
	<PlayerCard>
		<template v-slot:image>
			<img :src="rolePicture()" :alt="role">
		</template>
		<template v-slot:content class="content">
			<div class="role">
				{{ role }}
			</div>
			<router-link :to="{name: 'select-player', params: { role }}" class="call-to-action lfl-btn" tag="button">Select</router-link>
		</template>
	</PlayerCard>
</template>

<script>
import PlayerCard from '@/components/PlayerCard';
export default {
	props: [
		'role',
	],
	components: {
		PlayerCard,
	},
	methods: {
		rolePicture() {
			switch (this.role) {
			case "top": return "https://dutchleague.lol/wp-content/uploads/2020/01/TopLane.png";
			case "jungle": return "https://dutchleague.lol/wp-content/uploads/2020/01/jungle.png";
			case "mid": return "https://dutchleague.lol/wp-content/uploads/2020/01/midlane.png";
			case "bottom": return "https://dutchleague.lol/wp-content/uploads/2020/01/botlane.png";
			case "support": return "https://dutchleague.lol/wp-content/uploads/2020/01/support.png";
			case "default": return "";
			}
		},
	},
};
</script>

<style scoped>
	.content {
		text-align: center;
	}
	.role {
		padding: 0 1rem;
		color: var(--primary);
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: uppercase;
	}
	.call-to-action {
		margin: .5rem 0;
	}
	.player {
		background-color: black;
		cursor: pointer;
	}
	.player:hover {
		opacity: .8;
	}
</style>
