<template>
	<nav class="navigation__secondary">
		<ul class="navigation__secondary--list">
			<li class="navigation__secondary--item">
				<picture>
					<router-link to="/">
						<img
							src="https://via.placeholder.com/170x48?text=Elsevier"
							alt="logo Elsevier"
						/>
					</router-link>
				</picture>
			</li>
			<li class="navigation__secondary--item">
				<a class="link" href="#">Research</a>
			</li>
			<li class="navigation__secondary--item">
				<a class="link" href="#">Health</a>
			</li>
			<li class="navigation__secondary--item">
				<a class="link" href="#">R&#38;D</a>
			</li>
		</ul>
		<div class="navigation__secondary--icon">
			<a class="link" href="#">Icon1</a>
			<a class="link" href="#">Icon2</a>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navigation',
	}
</script>

<style>
.navigation__secondary {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.navigation__secondary--list {
	list-style-type: none;
	display: flex;
}
</style>