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
				<div class="logo">
					<a href="/">
						<img src="../static/assets/lfl-logo.png" alt="LFL logo">
					</a>
				</div>
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
			height: 10rem;
			min-width: 110px;
			margin-top: 7rem;
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
