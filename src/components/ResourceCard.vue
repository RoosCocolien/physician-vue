<template>
	<article class="carousel__article">
		<img
		class="carousel__article--image"
		src="https://via.placeholder.com/377x276"
		alt="Person with face mask"
		/>
		<h6>{{title}}</h6>
		<h4>{{subTitle}}</h4>
	</article>
</template>

<script>
export default {
	name: 'ResourceCard',
	props: {
		title: {required: true, type: String},
		subTitle: {required: true, type: String},
	}
}
</script>

<style>

</style>