<template>
	<label class="switch">
		<input type="checkbox">
		<div class="rounded"></div>
	</label>
</template>

<script>
export default {
	data: () => ({}),
	computed: {},
};
</script>

<style scoped>
	.switch  {
		input {display: none;}
		input:checked + .rounded:before {
			background-color: #ffd866;
			left: 25px;
		}
		.rounded {
			width: 49px;
			height: 26px;
			background-color: #000;
			border-radius: 20px;
			position: relative;
			cursor: pointer;

			&:before {
				content: '';
				position: absolute;
				height: 22px;
				width: 22px;
				background-color: #1e1e1e;
				box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.5);
				top: calc(50% - 11px);
				border-radius: 20px;
				transition: all 0.2s;
				left: 2px;
			}
		}
	}
</style>
