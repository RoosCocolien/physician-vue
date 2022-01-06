<template>
	<div class="carousel">
		<div class="carousel__list">
			<div v-for="card in this.cards" class="carousel__item"  :key="card.alt">
				<topics-card :title="card.title" :subTitle="card.subTitle" :src="card.src" :alt="card.alt" />
			</div>
		</div>
	</div>
</template>

<script>
import TopicsCard from '../TopicsCard/TopicsCard.vue';

export default {
	name: 'SlideshowCards',
	components: {
		TopicsCard,
	},
	props: {
		cards: {
			type: Array,
			default: () => ({}),
		},
		mounted() {
			console.log(this.cards);
		}
	}
}
</script>

<style scoped lang="scss">
.carousel__list {
	display: flex;
	list-style-type: none;
}
</style>