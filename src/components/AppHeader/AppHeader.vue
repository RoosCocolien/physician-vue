<template>
<header>
	<nav class="app-header">
		<router-link class="link link__black" to="/about"> About Elsevier</router-link>
		<ul class="app-header__list">
			<li class="app-header__item">
				<a class="link link__black" href="#">REL 22.04</a>
			</li>
			<li class="app-header__item">
				<a class="link link__black" href="#">United States - English</a>
			</li>
			<li class="app-header__item">
				<a class="link link__black" href="#">Careers</a>
			</li>
			<li class="app-header__item">
				<a class="link link__black" href="#">Support</a>
			</li>
			<li class="app-header__item">
				<a class="link link__black" href="#">Sign up</a>
			</li>
			<li class="app-header__item">
				<a class="link link__black" href="#">Login</a>
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