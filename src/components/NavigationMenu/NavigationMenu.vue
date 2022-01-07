<template>
	<nav class="navigation-menu">
		<ul class="navigation-menu__list">
			<li class="navigation-menu__item link link__white">
				<picture>
					<router-link to="/">
						<img
							src="https://via.placeholder.com/170x48?text=Elsevier"
							alt="logo Elsevier"
						/>
					</router-link>
				</picture>
			</li>
			<li class="navigation-menu__item">
				<a class="link link__white" href="#">Research</a>
			</li>
			<li class="navigation-menu__item">
				<a class="link link__white" href="#">Health</a>
			</li>
			<li class="navigation-menu__item">
				<a class="link link__white" href="#">R&#38;D</a>
			</li>
		</ul>
		<div class="navigation-menu__icons">
			<a class="link link__white navigation-menu__icons--item" href="#">Icon1</a>
			<a class="link link__white navigation-menu__icons--item" href="#">Icon2</a>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
	}
</script>

<style src="./NavigationMenu.scss" lang="scss"></style>