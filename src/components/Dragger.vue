<template>
	<div class="teams">
		<header>Vos prédictions</header>
		<div class="list">
			<div class="indexes">
				<div class="index" v-for="(team, index) in teams" :key="team.name">{{ index + 1}}</div>
			</div>
			<div class="team-list">
				<draggable v-model="teams" @start="drag = true" @end="drag = false" v-bind="dragOptions">
					<transition-group type="transition" :name="!drag ? 'flip-list' : null">
						<div class="team" v-for="team in teams" :key="team.name">
							<img :src="`/assets/lfl/${team.logo}`" :alt="team.name">
							<span class="name">{{ team.name }}</span>
							<font-awesome-icon icon="grip-lines" />
						</div>
					</transition-group>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable';
import { teams } from '@/static/teams';

export default {
	components: {
		draggable,
	},
	data: () => ({
		teams,
		drag: false,
	}),
	computed: {
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
	.teams {margin-bottom: 2rem;}
	header {
		background-color: #1e1e1e;
		border-bottom: 5px solid #191919;
		text-align: center;
		padding: .5rem .75rem;
	}
	.list {display: flex;}
	.team-list {flex-grow: 1;}

	.team, .index {
		background-color: #1e1e1e;
		display: flex;
		align-items: center;
		padding: 1rem 1rem;
		font-size: 1.5rem;
		img {height: 2rem; width: auto; margin-right: 1rem;}
		&:not(:last-of-type) {border-bottom: 3px solid #191919;}
		.name {flex-grow: 1; text-align: left;}
		svg {cursor: grab;font-size: 1rem;opacity: .8;}
	}
	.index {margin-right: .5rem;}

	.flip-list-move {transition: transform 0.5s;}
	.no-move {transition: transform 0s;}
	.ghost {opacity: 0.5; background: #1e1e1e;}
</style>
