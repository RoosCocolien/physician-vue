<template>
	<article class="main-hero">
		<article class="main-hero__text">
			<nav class="main-hero__text--nav">
				<ul class="main-hero__text--nav-list">
					<li class="main-hero__text--nav-item">
						<a class="link link__brand" href="#">Health &gt;</a>
					</li>
					<li class="main-hero__text--nav-item">
						<a class="link link__brand" href="#">Physicians</a>
					</li>
				</ul>
			</nav>
			<h1>Make the best clinical decision in every area</h1>
			<p>
				Comprehensive content and evidence-based solutions that support you
				in solving clinical challenges you face as physicians everyday.
			</p>
			<button class="button button__brand sm">See our solutions</button>
		</article>
		<figure class="main-hero__figure">
			<img
				class="hero__figure--image"
				src="https://via.placeholder.com/580x521"
				alt="Person with face mask"
			/>
		</figure>
	</article>
</template>

<script>
	export default {
		name: 'Hero',
	}
</script>

<style lang="scss" src="./MainHero.scss">
</style>