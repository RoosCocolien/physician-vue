<template>
	<div class="carousel">
		<div class="carousel__list">
			<div clas="carousel__item" v-for="card in this.cards" :key="card.alt">
				<resource-card :title="card.title" :subTitle="card.subTitle" :src="card.src" :alt="card.alt" />
			</div>
		</div>
	</div>
</template>

<script>
import ResourceCard from '../components/ResourceCard.vue';

export default {
	name: 'Carousel',
	components: {
		ResourceCard,
	},
	props: {
		cards: {
			type: Object,
			default: () => ({}),
		},
		mounted() {
			console.log(this.cards);
		}
	}
}
</script>

<style scoped>
.carousel__list {
	display: flex;
	list-style-type: none;
}
</style>