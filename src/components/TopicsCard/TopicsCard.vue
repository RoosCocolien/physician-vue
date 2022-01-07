<template>
<article class="topics-card">
	<h6 class="topics-card__subtitle">{{subTitle}}</h6>
	<h3 class="topics-card__title">{{title}}</h3>
	<img
	class="topics-card__image"
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

<style src="./TopicsCard.scss" lang="scss"></style>