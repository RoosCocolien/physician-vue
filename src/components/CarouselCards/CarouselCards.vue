<template>
	<div class="carousel" aria-roledescription="carousel">
		<div class="carousel__container" ref="container" :style="containerStyles">
			<div clas="carousel__card" v-for="card in this.cards" :key="card.alt">
				<resource-card :title="card.title" :subTitle="card.subTitle" :src="card.src" :alt="card.alt" />
			</div>
		</div>
		<div class="carousel__navigation">
			<button @click="prev" class="carousel__navigation--button md">&lt;</button>
			<button @click="next" class="carousel__navigation--button md">&gt;</button>
		</div>
	</div>
</template>

<script>
import ResourceCard from '../ResourceCard/ResourceCard.vue';

export default {
	name: 'Carousel',
	components: {
		ResourceCard,
	},
	data() {
		return {
			containerStyles: {},
			step: '',
			transitioning: false,
		}
	},
	mounted() {
		this.setStep()
		this.resetTranslate()
	},
	props: {
		cards: {
			type: Array,
			default: () => ({}),
		},
	},
	methods: {
		setStep() {
			console.log('scrollWidtg: ', this.$refs.container.scrollWidth, ' and width: ', this.$refs.container.clientWidth)
			const containerWidth = this.$refs.container.scrollWidth
			const totalCards = this.cards.length
			console.log('containerWidth: ', containerWidth);
			console.log('totalCards: ', totalCards);
			this.step = `${containerWidth / totalCards}px`
		},

		afterTransition(callback) {
			const listener = () => {
				callback()
				this.$refs.container.removeEventListener('transitionend', listener)
			}
			this.$refs.container.addEventListener('transitionend', listener)
		},

		next() {
			if (this.transitioning) return //to prevent navigations without transition
			this.transitioning = true

			this.moveLeft()

			this.afterTransition(() => {
				const card = this.cards.shift()
				console.log('card: ', card)
				console.log('this.cards: ', this.cards)
				this.cards.push(card)
				console.log('this.cards after push: ', this.cards)
				this.resetTranslate()
				this.transitioning = false
			})
		},
		

		resetTranslate() {
			this.containerStyles = {
				transition: 'none',
				transform: `translateX(-${this.step})`,
			}
		},

		moveLeft() {
			console.log('moveLeft, this.step: ', this.step)
			console.log('containerStyles: ', this.containerStyles);
			this.containerStyles = {
				transform: `translateX(-${this.step})
							translateX(-${this.step})`
			}
		},

		moveRight() {
			this.containerStyles = {
				transform: `translateX(${this.step})
							translateX(-${this.step})`
			}
		},

		prev() {
			console.log('prev is clicked')
			if (this.transitioning) return
			this.transitioning = true

			this.moveRight()

			this.afterTransition(() => {
				const card = this.cards.pop()
				this.cards.unshift(card)
				this.resetTranslate()
				this.transitioning = false
			})
		},
	}
}
</script>

<style src="./CarouselCards.scss" lang="scss"></style>