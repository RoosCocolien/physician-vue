<template>
<header>
	<nav class="app-header">
		<!-- <a class="link link__white" href="#">About Elsevier</a> -->
		<router-link class="link link__white" to="/about"> About Elsevier</router-link>
		<ul class="app-header__list">
			<li class="app-header__item">
				<a class="link link__white" href="#">REL 22.04</a>
			</li>
			<li class="app-header__item">
				<a class="link link__white" href="#">United States - English</a>
			</li>
			<li class="app-header__item">
				<a class="link link__white" href="#">Careers</a>
			</li>
			<li class="app-header__item">
				<a class="link link__white" href="#">Support</a>
			</li>
			<li class="app-header__item">
				<a class="link link__white" href="#">Sign up</a>
			</li>
			<li class="app-header__item">
				<a class="link link__white" href="#">Login</a>
			</li>
		</ul>
	</nav>
</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style src="./AppHeader.scss" lang="scss"></style>