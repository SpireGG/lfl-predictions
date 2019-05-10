<template>
	<modal name="share-modal" :height="'auto'">
		<div class="modal">
			<header class="modal-header">
				<h5>Partagez vos predictions
					<button class="button-link modal-close-button" @click="close"><font-awesome-icon icon="times" /></button>
				</h5>
			</header>

			<div class="modal-body">
				<div class="container">
					<div class="row">
						<div class="col">
							<form @submit.prevent="">
								<div class="input-field">
									<label for="name">Name *</label>
									<input type="text" name="name" id="name" v-model="request.name" required>
								</div>
								<button type="submit" class="button" style="float: right;">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</modal>
</template>

<script>

export default {
	data: () => ({
		player: null,
		request: {
		},
	}),
	methods: {
		close() { this.$modal.hide('share-modal'); },
	},
};
</script>

<style scoped>
.modal {
	min-width: 25vw;
	padding: 1rem 2rem;
	background-color: #1e1e1e;
	border: 1px solid #191919;
}
.modal-header {margin-bottom: 1rem;}
h5 > button {
	float:right;
	margin-top:-.5rem;
	font-size: 1.5rem;
	color: inherit;
	&:hover {color: #fcd359;}
}
.v--modal-overlay {background: rgba(0, 0, 0, 0.8);}
</style>
