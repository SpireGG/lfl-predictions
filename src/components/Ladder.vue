<template>
	<table>
		<thead>
		<tr>
			<th></th>
			<th>{{ $t('ladder.team') }}</th>
			<th :title="$t('ladder.long.victory')">{{ $t('ladder.short.victory') }}</th>
			<th :title="$t('ladder.long.defeat')">{{ $t('ladder.short.defeat') }}</th>
			<th :title="$t('ladder.long.played')">{{ $t('ladder.short.played') }}</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(team, index) in ladder" :key="team.name">
			<td>{{ index + 1}}</td>
			<td class="name"><img :src="`/assets/${league}/${team.logo}`" :alt="team.name"> <span class="hide-md">{{ team.name }}</span></td>
			<td>{{ team.wins }}</td>
			<td>{{ team.losses }}</td>
			<td>{{ team.wins + team.losses }}</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
import { orderBy } from 'lodash-es';
export default {
	computed: {
		league() { return this.$store.state.selected_league; },
		ladder() { return orderBy(this.$store.getters[`${this.league}/ladder`], ['wins', 'name'], ['desc', 'asc']);},
	},
};
</script>

<style scoped>
table {background-color: #1e1e1e;}
th {border-bottom: 5px solid #191919; text-align: center;color: #999485;}
td {border-bottom: 3px solid #191919; color: #f1e6d2;}
td.name {text-align: left;padding-left: 1rem;}
img {width: 1.5rem;margin-right: .5rem;}
</style>
