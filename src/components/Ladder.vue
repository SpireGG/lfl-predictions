<template>
	<table>
		<thead>
		<tr>
			<th></th>
			<th>Equipe</th>
			<th title="Victoires">V</th>
			<th title="Défaites">D</th>
			<th title="Jouées">J</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(team, index) in ladder" :key="team.name">
			<td>{{ index + 1}}</td>
			<td class="name"><img :src="`/assets/${team.logo}`" :alt="team.name"> {{ team.name }}</td>
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
		ladder() { return orderBy(this.$store.getters.ladder, ['wins', 'name'], ['desc', 'asc']);},
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
