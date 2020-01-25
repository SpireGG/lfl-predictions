<template>
    <div class="hero">
			<div class="container">
				<div class="row">
					<div class="col col-md-6">
						<div class="hero-text">
							<h2>Week#1</h2>
							<h1>Equipe de la Semaine</h1>
							<h3>par @Chypriote</h3>
						</div>
					</div>
					<div class="col col-md-6">
						<div class="hero-picture">
							<div class="logo">
							<img src="https://lollfl.com/assets/lfl-logo.png" alt="LFL" class="">
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>

<style scoped>
	.hero {
		background-color: #fff;
		background-image: url(https://lollfl.com/assets/declin-particule-left.png?250158451), url(https://lollfl.com/assets/declin-particule-right.png?250158451), url(https://lollfl.com/assets/declin-particule-bottom-left.png?250158451), url(https://lollfl.com/assets/declin-particule-bottom-right.png?250158451), linear-gradient(175deg, #1c1c1c, #0d0d0d);
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		background-position: top left, top right, bottom left, bottom right;
		box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
		transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
		margin-top: 0;
		margin-bottom: 0;
	}
	.hero-text {
		text-align: left;
	}
	h2 {
		margin-top: 1rem;
		color: #eee;
		font-size: 8rem;
		font-weight: bold;
		opacity: .8;
	}
	h1 {
		color: var(--primary);
		font-weight: bold;
		text-transform: uppercase;
		font-size: 2.5rem;
	}
	h3 {
		color: var(--header);
		opacity: .5;
		font-weight: normal;
		font-size: 1.5rem;
	}

	.hero-picture {
		padding: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 33vh;
		img {max-height: 25vh;}
	}
</style>
