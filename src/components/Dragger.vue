<template>
	<div class="list">
		<div class="indexes">
			<div class="index" v-for="(team, index) in teams" :key="team.name">{{ index + 1}}</div>
		</div>
		<div class="team-list">
			<draggable v-model="teams" @start="drag = true" @end="drag = false" v-bind="dragOptions">
				<transition-group type="transition" :name="!drag ? 'flip-list' : null">
					<div class="team" v-for="(team, index) in teams" :key="team.name">
						<img :src="`/assets/teams/${league}/${team.logo}`" :alt="team.name">
						<span class="name">{{ team.name }}</span>
						<font-awesome-icon icon="grip-lines" />
						<div class="watermark" v-if="index === teams.length - 1">
							<lolpros-logo />
						</div>
					</div>
				</transition-group>
			</draggable>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	components: {
		draggable,
	},
	data: () => ({
		drag: false,
	}),
	computed: {
		league() { return this.$store.state.selected_league; },
		teams: {
			get() {return this.$store.state[this.league]['teams'];},
			set(value) {this.$store.commit(`${this.league}/UPDATE`, value);},
		},
		dragOptions() {
			return {
				animation: 200,
				group: "description",
				disabled: false,
				ghostClass: "ghost",
			};
		},
	},
};
</script>

<style scoped>
	.list {display: flex;}
	.team-list {flex-grow: 1;}

	.team, .index {
		background-color: #1e1e1e;
		position: relative;
		display: flex;
		align-items: center;
		padding: 1rem 1rem;
		font-size: 1.5rem;
		@media (max-width: 767px) { font-size: 1rem; }
		img {height: 2rem; width: auto; margin-right: 1rem;}
		&:not(:last-of-type) {border-bottom: 3px solid #191919;}
		.name {flex-grow: 1; text-align: left;}
		svg {cursor: grab;font-size: 1rem;opacity: .8;}
	}
	.index {margin-right: .5rem;}

	.flip-list-move {transition: transform 0.5s;}
	.no-move {transition: transform 0s;}
	.ghost {opacity: 0.5; background: #1e1e1e;}

	.watermark {
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: .7rem;
		opacity: .5;
	}
</style>
