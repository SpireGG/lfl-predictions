<template>
	<div class="top-banner">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4 offset-md-4">
					<dragger />
					<div class="action">
						<button class="button button-share" @click.prevent="openShare">
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
	.top-banner {
		padding-top: 7rem;
		height: calc(100vh - 5rem);
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
