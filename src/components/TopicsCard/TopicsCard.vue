<template>
<article class="collection__card">
	<h6 class="collection__card--label">{{subTitle}}</h6>
	<h3 class="collection__card--title">{{title}}</h3>
	<img
	class="collection__card--image"
	:src="this.src"
	:alt="this.alt"
	/>
</article>
</template>

<script>
export default {
	name: 'TopicsCard',
	props: {
		subTitle: {required: false, type: String},
		title: {required: false, type: String},
		src: {required: false, type: String},
		alt: {required: false, type: String},
	}
}
</script>

<style src="./TopicsCard" lang="scss"></style>