<template>
	<div class="main-nav">
		<div class="lolpros-container">
			<a href="//lolpros.gg" target="_blank" rel="noopener" style="font-size: 1.5rem">
				<span class="subtitle">A tool by</span>
				<lolpros-logo />
			</a>
		</div>
		<div class="container">
			<div class="nav-content">
				<router-link :to="{name: 'league', params: {league: 'lec'}}" class="nav-link disabled">
					<img src="/assets/logos/lec-logo.png" alt="LEC logo">
					<span>LEC</span>
				</router-link>
				<router-link :to="{name: 'league', params: {league: 'lfl'}}" class="nav-link disabled">
					<img src="/assets/logos/lfl-logo.png" alt="LFL logo">
					<span>LFL</span>
				</router-link>
				<a class="nav-link disabled">
					<img src="/assets/logos/ul-logo.png" alt="UL logo">
					<span>UL</span>
				</a>
				<div class="nav-link"></div>
				<div class="logo">
					<a href="/">
						<img :src="`/assets/logos/${league}-logo.png`" alt="LFL logo">
					</a>
				</div>
				<div class="nav-link"></div>
				<router-link :to="{name: 'league', params: {league: 'lvp'}}" class="nav-link disabled">
					<img src="/assets/logos/lvp-logo.png" alt="LVP logo">
					<span>LVP</span>
				</router-link>
				<router-link :to="{name: 'league', params: {league: 'eslm'}}" class="nav-link disabled">
					<img src="/assets/logos/eslm-logo.png" alt="ESLM logo">
					<span>ESLM</span>
				</router-link>
				<a class="nav-link disabled">
					<img src="/assets/logos/pgn-logo.png" alt="PGN logo">
					<span>PGN</span>
				</a>
				<a class="nav-link disabled">
					<img src="/assets/logos/uklc-logo.png" alt="UKLC logo">
				</a>
			</div>
		</div>
		<div class="twitter-container">
			<a href="//twitter.com/Chypriote" target="_blank" class="twitter">
				<img src="../static/assets/picto-twitter-bleu.svg" alt="Twitter">
				<span>Chypriote</span>
			</a>
		</div>
	</div>
</template>

<script>

export default {
	components: {
	},
	data: () => ({}),
	computed: {
		league() { return this.$store.state.selected_league; },
	},
};
</script>

<style scoped>
	.main-nav {
		position: fixed;
		z-index: 5000;
		color: #f3cd59;
		top: 0;
		left: 0;
		right: 0;
		height: 5rem;
		background-color: #181818;
		display: flex;

		.lolpros-container, .twitter-container {flex: 1;}
		&:after {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			bottom: 0;
			background-image: linear-gradient(90deg, transparent 0%, #fcd359 50%, transparent 100%);
		}
	}

	.container {
		flex: none;
	}

	.nav-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
		text-transform: uppercase;
	}

	.nav-link {
		flex: 1;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		img {height: 2rem;margin-right: .5rem;}
		position: relative;
		&.disabled {cursor: default;
			display: none;}
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
	.logo {
		z-index: 99;
		a {display: block;}
		img {
			height: 8rem;
			margin-top: 5rem;
		}
	}
	.lolpros-container {
		display: flex;
		align-self: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		.subtitle {
			position: absolute;
			top: -.5rem;
			left: -5rem;
			right: 0;
			margin: auto;
			font-size: .7rem;
			color: #ccc;
		}
	}
	.twitter-container {
		align-self: center;
		display: flex;
		.twitter {
			text-transform: none;
			margin-left: 1rem;
			span {margin-left: .5rem;}
			img {height: 1rem;}
			&:hover {color: #1da1f2;}
		}
	}
</style>
