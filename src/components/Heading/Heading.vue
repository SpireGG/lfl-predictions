<template>
	<div class="heading">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	props: ['title'],
};
</script>

<style scoped>
	h1 {
		background-image: linear-gradient(to bottom, #fce293, #b8933a);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		letter-spacing: 3px;
		font-weight: bold;
		position: relative;
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		&:after {
			content: '';
			position: absolute;
			background-image: linear-gradient(90deg, transparent 0%, #fcd359 50%, transparent 100%);
			height: 2px;
			width: 19rem;
			margin: 0 auto;
			left: calc(50% - (19rem/2));
			bottom: -35px;
		}
	}
	.heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 25vh;
	}
</style>
