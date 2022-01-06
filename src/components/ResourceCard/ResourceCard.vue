<template>
	<article class="carousel__article">
		<img
		class="carousel__article--image"
		:src="this.src"
		:alt="this.alt"
		/>
		<h6>{{title}}</h6>
		<h4>{{subTitle}}</h4>
	</article>
</template>

<script>
export default {
	name: 'ResourceCard',
	props: {
		title: {required: false, type: String},
		subTitle: {required: false, type: String},
		src: {required: false, type: String},
		alt: {required: false, type: String},
	}
}
</script>

<style lang="scss">
.carousel__article {
	background-color: $notice;
}
</style>