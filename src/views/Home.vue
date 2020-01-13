<template>
	<div class="top-banner">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4 offset-md-4">
					<div class="teams">
						<header :key="$route.params.league">{{ leagueName }}</header>
						<dragger />
					</div>
					<div class="action">
						<button class="button button-share" @click.prevent="openShare" style="display: none">
							<font-awesome-icon icon="share-square" /> Partager
						</button>
						<share-modal />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Dragger from '@/components/Dragger';
import ShareModal from "../components/ShareModal";

export default {
	components: {
		ShareModal,
		Dragger,
	},
	methods: {
		openShare() { this.$modal.show('share-modal'); },
	},
	computed: {
		league() { return this.$store.state.selected_league; },
		leagueName() {return this.$store.getters.league_name;},
	},
	watch: {
		'$route.params.league'(value) {
			this.$store.commit('SELECT_LEAGUE', value);
		},
	},
};
</script>

<style scoped>
	.teams {
		margin-bottom: 2rem;
		header {
			background-color: #1e1e1e;
			border-bottom: 5px solid #191919;
			text-align: center;
			padding: .5rem .75rem;
			font-size: 28px;
			letter-spacing: .25rem;
			background-image: linear-gradient(to bottom, #fce293, #b8933a);
			line-height: normal;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
	.top-banner {
		padding-top: 6rem;
		min-height: calc(100vh - 5rem);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url(../static/assets/declin-particule-left.png?809149183), url(../static/assets/declin-particule-right.png?809149183), url(../static/assets/declin-particule-bottom-left.png?809149183), url(../static/assets/declin-particule-bottom-right.png?809149183), linear-gradient(175deg, #1c1c1c, #0d0d0d);
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		background-position: top left, top right, bottom left, bottom right;
	}
	.button-share {
		line-height: 1;
		.fa-share-square {margin-right: .5rem;}
	}
	h1 {
		font-family: serif;
		letter-spacing: 8px;
		margin-bottom: 2rem;
		color: #fcd359;
	}
</style>
