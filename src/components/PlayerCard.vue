<template>
	<div class="card">
		<div class="card-background" :style="{'background-image': `url('${rolePicture()}')`}">
			<slot name="image" />
		</div>
		<div class="card-content">
			<slot name="content" />
		</div>
	</div>
</template>

<script>
export default {
	props: ['role'],
	methods: {
		rolePicture() {
			switch (this.role) {
			case "top": return "https://dutchleague.lol/wp-content/uploads/2020/01/TopLane.png";
			case "jungle": return "https://dutchleague.lol/wp-content/uploads/2020/01/jungle.png";
			case "mid": return "https://dutchleague.lol/wp-content/uploads/2020/01/midlane.png";
			case "bottom": return "https://dutchleague.lol/wp-content/uploads/2020/01/botlane.png";
			case "support": return "https://dutchleague.lol/wp-content/uploads/2020/01/support.png";
			case "default": return "";
			}
		},
	},
};
</script>

<style scoped>
	.card {
		background-color: #1E1E1E;
		margin: 1rem 0;
		padding: .75rem;
	}
	.card-background {
		height: 17rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #303030;
		background-position: top left;
		background-repeat: no-repeat;
		background-size: 25% auto;
		border-bottom: 2px solid var(--primary);
	}
	.card-content {
		margin-top: .5rem;
		height: 5rem;
	}
</style>
