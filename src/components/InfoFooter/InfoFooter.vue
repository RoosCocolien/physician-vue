<template>
<article class="info-footer">
	<section class="info-footer__title">
		<h4>Stay current with the latest updates for physicians</h4>
	</section>
	<section class="info-footer__action">
		<p>
			Product updates, events, and inspiration sent right to your inbox.
		</p>
		<label for="mail">
			<strong><abbr title="required"></abbr></strong>
		</label>
		<input class="input sm" type="email" id="mail" placeholder="Your email" />
		<button class="button button__brand button__form sm">Subscribe</button>
	</section>
</article>
</template>

<script>
export default {
	name: 'Info',
}
</script>

<style src="./InfoFooter.scss" lang="scss">

</style>