<template>
	<div class="team">
		<div class="container">
			<div class="row">
				<div class="col col-15">
					<team-player :player="top" v-if="top" :deletable="true" />
					<select-player :role="positions.top" v-else />
				</div>
				<div class="col col-15">
					<team-player :player="jungle" v-if="jungle" :deletable="true" />
					<select-player :role="positions.jungle" v-else />
				</div>
				<div class="col col-15">
					<team-player :player="mid" v-if="mid" :deletable="true" />
					<select-player :role="positions.mid" v-else />
				</div>
				<div class="col col-15">
					<team-player :player="bottom" v-if="bottom" :deletable="true" />
					<select-player :role="positions.bottom" v-else />
				</div>
				<div class="col col-15">
					<team-player :player="support" v-if="support" :deletable="true" />
					<select-player :role="positions.support" v-else />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TeamPlayer from '@/components/Team/TeamPlayer';
import SelectPlayer from '@/components/Team/SelectPlayer';
import { positions } from '@/static/positions';

export default {
	components: {
		TeamPlayer,
		SelectPlayer,
	},
	props: [
		'players',
	],
	data: () => ({
		positions,
	}),
	computed: {
		top() {return this.$store.getters.selectedTop;},
		jungle() {return this.$store.getters.selectedJungle;},
		mid() {return this.$store.getters.selectedMid;},
		bottom() {return this.$store.getters.selectedBottom;},
		support() {return this.$store.getters.selectedSupport;},
	},
};
</script>

<style scoped>
	.deletable:hover {
		opacity: .1;
		cursor: pointer;
		content: 'delete'
	}
</style>
