<template>
  <div class="container md">
	<main-hero />
	<carousel-cards resources :cards="this.Resources"/>
	<page-content />
	<page-content reverse />
	<carousel-cards topics :cards="this.Topics"/>
	<page-banner />
	<info-footer />
	<related-pages />
  </div>
</template>

<script>
import MainHero from '../components/MainHero/MainHero.vue';
import PageBanner from '../components/PageBanner/PageBanner.vue';
import CarouselCards from '../components/CarouselCards/CarouselCards.vue';
import PageContent from '../components/PageContent/PageContent.vue';
import InfoFooter from '../components/InfoFooter/InfoFooter.vue';
import RelatedPages from '../components/RelatedPages/RelatedPages.vue';

export default {
  name: 'Home',
  components: { 
	MainHero,
    PageBanner,
    CarouselCards,
    PageContent,
    InfoFooter,
	RelatedPages,
  },
  data() {
	return {
		Resources: [
			{
				title: "Webinar", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/FFEAE8?text=1", alt: "Person with face mask1"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/efffe8?text=2", alt: "Person with face mask2"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/ffe6f0?text=3", alt: "Person with face mask3"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/e6ecff?text=4", alt: "Person with face mask4"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/FFEAE8?text=5", alt: "Person with face mask5"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/dbfff1?text=6", alt: "Person with face mask6"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/ffe6f0?text=7", alt: "Person with face mask7"
			},
		],
		Topics: [
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2?text=1", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Analytics for better healthcare", src: "https://via.placeholder.com/260x260/FFF8F2?text=2", alt: "Illustration of analytics 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2?text=3", alt: "Illustration of atoms 3"
			},
			{
				subTitle: "collection", title: "Analytics for better healthcare", src: "https://via.placeholder.com/260x260/FFF8F2?text=4", alt: "Illustration of analytics 2"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2?text=5", alt: "Illustration of atoms 5"
			},
			{
				subTitle: "collection", title: "Analytics for better healthcare", src: "https://via.placeholder.com/260x260/FFF8F2?text=6", alt: "Illustration of analytics 3"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2?text=7", alt: "Illustration of atoms 7"
			},
			{
				subTitle: "collection", title: "Analytics for better healthcare", src: "https://via.placeholder.com/260x260/FFF8F2?text=8", alt: "Illustration of analytics 4"
			},
		]
	};
  }
};
</script>

<style src="./Home.scss" lang="scss">
</style>