<template>
	<div class="main-nav">
		<div class="lolpros-container">
			<a href="//lolpros.gg" target="_blank" rel="noopener" class="lolpros-link">
				<span class="subtitle">A tool by</span>
				<lolpros-logo />
			</a>
		</div>
		<div class="container">
			<div class="nav-content">
				<router-link :to="{name: 'home', params: {league: 'lfl'}}" class="nav-link" :active-class="'disabled'">
					<img src="../static/assets/lfl-logo.png" alt="LFL logo">
					<span>LFL</span>
				</router-link>
				<router-link :to="{name: 'home', params: {league: 'div2'}}" class="nav-link" :active-class="'disabled'">
					<img src="../static/assets/div2-logo.png" alt="Division 2 logo">
					<span>Division 2</span>
				</router-link>
				<div class="logo">
					<a href="/">
						<img :src="`/assets/logos/${league}-logo.png`" :alt="leagueName">
					</a>
				</div>
				<router-link :to="{name: 'home', params: {league: 'lec'}}" class="nav-link" :active-class="'disabled'">
					<img src="../static/assets/lec-logo.png" alt="LEC logo">
					<span>LEC</span>
				</router-link>
				<router-link :to="{name: 'home', params: {league: 'lcs'}}" class="nav-link" :active-class="'disabled'">
					<img src="../static/assets/lcs-logo.png" alt="LCS logo">
					<span>LCS</span>
				</router-link>
			</div>
		</div>
		<div class="twitter-container">
			<a href="//twitter.com/Chypriote" target="_blank" class="twitter">
				<font-awesome-icon :icon="['fab', 'twitter']" />
				<span>Chypriote</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		league() { return this.$store.state.selected_league; },
		leagueName() {return this.$store.getters.league_name;},
	},
};
</script>

<style scoped>
	.main-nav {
		position: fixed;
		z-index: 500;
		color: #f3cd59;
		top: 0;
		left: 0;
		right: 0;
		height: 5rem;
		background-color: #181818;
		display: flex;

		.lolpros-container, .twitter-container {flex: 1;padding: 0 2rem;display: flex;align-items: center;}
		&:after {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			bottom: 0;
			background-image: linear-gradient(90deg, transparent 0%, #fcd359 50%, transparent 100%);
		}
	}

	.nav-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
		text-transform: uppercase;
	}

	.logo {
		flex: 1;
		z-index: 99;
		a {display: block;}
		img {
			height: 9rem;
			min-width: 90px;
			margin-top: 6rem;
		}
	}
	.nav-link {
		flex: 1;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		img {height: 2rem;margin-right: .5rem;}
		position: relative;
		&.disabled {cursor: default;opacity: 0.5;}
		&:not(.disabled):hover:before {
			content: '';
			opacity: 1;
		}
		&:before {
			content: '';
			height: 26px;
			width: 154px;
			position: absolute;
			left: calc(50% - 77px);
			bottom: -5px;
			background-image: url(../static/assets/menu_current.png);
			background-repeat: no-repeat;
			transition: all 0.2s;
			opacity: 0;
			pointer-events: none;
		}
	}
	.lolpros-container {
		justify-content: center;
		flex-direction: column;
		position: relative;
	}
	.lolpros-link {
		position: relative;
		font-size: 1.5rem;
		.subtitle {
			position: absolute;
			top: -.75rem;
			left: 0;
			margin: auto;
			font-size: .7rem;
			color: #ccc;
		}
	}
	.twitter {
		display: flex;
		align-items: center;
		svg {color: #1da1f2;margin-right: .5rem}
		&:hover {color: #1da1f2;}
	}
</style>
