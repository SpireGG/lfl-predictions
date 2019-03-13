<template>
<div id="app">
	<navbar />
	<main>
		<router-view />
	</main>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
	components: {
		Navbar,
	},
	metaInfo() {
		return {
			titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} Predictions | LOLPros.GG` : `Predictions | LOLPros.GG`,
		};
	},
};
</script>

<style>
@import 'normalize.css/normalize.css';
@import 'shoelace-css/dist/shoelace.css';

@font-face {
	font-family: 'Leixo';
	src: url('./static/fonts/Leixo.woff2') format('woff2'),
	url('./static/fonts/Leixo.woff') format('woff'),
	url('./static/fonts/Leixo.ttf') format('ttf');
	font-weight: normal;
	font-style: normal;
}

#app {
	font-family: Lato, 'Avenir', Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	background-color: #e5e7ea;
	min-height: 100vh;
}
main {
	padding-top: 5rem;
}
a {
	cursor: pointer;
	color: #fcd359;
	transition: color .25s ease-out;
	&:hover {
		color: #f1e6d2;
		text-decoration: none;
	}
}
.button {
	background-color: #181818;
	border: 2px solid #ffd866;
	color: #fcd359;
	text-transform: uppercase;
  line-height: 1;
	&:hover {
		background-color: #0d0d0d;
		color: #f1e6d2;
		border: 2px solid #ffd866;
	}
	& + .button {margin-left: 2rem;}
	img {width: 1.5rem;}
}
body::-webkit-scrollbar {
	width: 6px;
	background-color: #1e1e1e;
}

body::-webkit-scrollbar-track {
	background-color: #f1e6d2;
}

body::-webkit-scrollbar-thumb {
	background-color: #212529;
}
</style>
