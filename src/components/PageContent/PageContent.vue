<template>
	<article :class="reverse ? 'page-content__reverse' : 'page-content'">
		<img class="page-content__image"
			src="https://via.placeholder.com/580x430"
			alt="Person with face mask"
		/>
		<article class="page-content__text">
			<a href="#" class="link link__brand">Reference &#38; decision support solutions &gt;</a>
			<h3>Improve patient outcomes with clinical and drug references</h3>
			<p>
				Accessible evidence based content for all stages of a patient care.
			</p>
			<div class="page-content__icon">
				<h5><abbr class="page-content__icon--abbr">CK</abbr></h5>
				<h5 class="page-content__icon--text">ClinicalKey</h5>
			</div>
		</article>
	</article>
</template>

<script>
export default {
	name: 'Content',
	props: {
		reverse: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style src="./PageContent.scss" lang="scss">

</style>