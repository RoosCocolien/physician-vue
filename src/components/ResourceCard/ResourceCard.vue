<template>
	<article class="resource-card">
		<img
		class="resource-card__image"
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

<style src="./ResourceCard.scss" lang="scss">

</style>