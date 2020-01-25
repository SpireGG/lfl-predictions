<template>
	<div>
		<Heading :title="leagueName" />
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
					<div class="teams">
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
import ShareModal from "@/components/ShareModal";
import Heading from '@/components/Heading/Heading';

export default {
	components: {
		Heading,
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
		@media (max-width: 991px) {padding-top: 3rem;}
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
