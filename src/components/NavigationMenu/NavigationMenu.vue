<template>
	<nav class="navigation-menu">
		<ul class="navigation-menu__list">
			<li class="navigation-menu__item">
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
				<a class="link" href="#">Research</a>
			</li>
			<li class="navigation-menu__item">
				<a class="link" href="#">Health</a>
			</li>
			<li class="navigation-menu__item">
				<a class="link" href="#">R&#38;D</a>
			</li>
		</ul>
		<div class="navigation-menu__icons">
			<a class="link navigation-menu__icons--item" href="#">Icon1</a>
			<a class="link navigation-menu__icons--item" href="#">Icon2</a>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
	}
</script>

<style src="./NavigationMenu.scss" lang="scss"></style>