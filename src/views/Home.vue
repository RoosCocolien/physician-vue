<template>
  <div class="home">
	<navigation-menu />
	<app-header />
	<main-hero />
	<page-banner />
	<carousel-cards :cards="this.Resources"/>
	<page-content />
	<page-content />
	<slideshow-cards :cards="this.Topics"/>
	<info-footer />
	<related-pages />
	<app-footer />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader/AppHeader.vue';
import CarouselCards from '../components/CarouselCards/CarouselCards.vue';
import PageBanner from '../components/PageBanner/PageBanner.vue';
import PageContent from '../components/PageContent/PageContent.vue';
import SlideshowCards from '../components/SlideshowCards/SlideshowCards.vue';
import AppFooter from '../components/AppFooter/AppFooter.vue';
import MainHero from '../components/MainHero/MainHero.vue';
import InfoFooter from '../components/InfoFooter/InfoFooter.vue';
import RelatedPages from '../components/RelatedPages/RelatedPages.vue';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu.vue';

export default {
  name: 'Home',
  components: { 
	AppHeader,
    PageBanner,
    CarouselCards,
    SlideshowCards,
    PageContent,
    AppFooter,
    MainHero,
    InfoFooter,
	RelatedPages,
    NavigationMenu,
  },
  data() {
	return {
		Resources: [
			{
				title: "Webinar", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/FFEAE8", alt: "Person with face mask1"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/efffe8", alt: "Person with face mask2"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/ffe6f0", alt: "Person with face mask3"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/e6ecff", alt: "Person with face mask4"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/FFEAE8", alt: "Person with face mask5"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/dbfff1", alt: "Person with face mask6"
			},
			{
				title: "Article", subTitle: "Behind the scenes of developing Pfizer's COVID-19 vaccine", src: "https://via.placeholder.com/377x276/FFEAE8", alt: "Person with face mask7"
			},
		],
		Topics: [
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
			{
				subTitle: "collection", title: "Dealing with COVID-19 and vaccines", src: "https://via.placeholder.com/260x260/FFF8F2", alt: "Illustration of atoms 1"
			},
		]
	};
  }
};
</script>

<style lang="scss">
	.home {
		background-color: lightcyan;
	}
</style>