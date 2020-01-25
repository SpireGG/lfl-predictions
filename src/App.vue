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
};
</script>

<style>
@import '~normalize.css/normalize.css';
@import '~shoelace-css/dist/shoelace.css';

:root {
	--primary: #fcd359;
	--secondary: #181818;
	--nav-primary: #181818;
	--nav-secondary: #fcd359;
	--header: #f1e6d2;
}

@font-face {
	font-family: 'Leixo';
	src: url('./static/fonts/Leixo.woff2') format('woff2'),
	url('./static/fonts/Leixo.woff') format('woff'),
	url('./static/fonts/Leixo.ttf') format('ttf');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'Cocogoose';
	src: url('./static/fonts/Cocogoose.woff2') format('woff2'),
	url('./static/fonts/Cocogoose.woff') format('woff'),
	url('./static/fonts/Cocogoose.eot') format('eot'),
	url('./static/fonts/Cocogoose.ttf') format('ttf');
	font-weight: normal;
	font-style: normal;
}

#app {
	font-family: Lato, 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #f1e6d2;
	min-height: 100vh;
	height: 100vh;
	background-image: url(./static/assets/declin-particule-left.png?809149183), url(./static/assets/declin-particule-right.png?809149183), url(./static/assets/declin-particule-bottom-left.png?809149183), url(./static/assets/declin-particule-bottom-right.png?809149183), linear-gradient(175deg, #1c1c1c, #0d0d0d);
	background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
	background-position: top left, top right, bottom left, bottom right;
	overflow-y: auto;
}
main {
	padding-top: 5rem;
	min-height: calc(100vh - 3.5rem);
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
.v--modal-overlay .v--modal-box{border-radius: 0;}
.lfl-btn {
	background-color: #181818;
	border: 2px solid #ffd866;
	color: #fcd359;
	text-transform: uppercase;
	line-height: 1;
	transition: all 200ms ease-in-out;

	&:hover {
		background-color: #0d0d0d;
		color: #f1e6d2;
		border: 2px solid #ffd866;
	}
	& + .button {margin-left: 2rem;}
}
</style>
