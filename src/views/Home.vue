<template>
  <div class="home">
	<Header />
	<Navigation />
	<Hero />
	<Carousel :cards="this.Resources" />
	<!-- <ResourceCard title="Webinar" subTitle="Behind the scenes of developing Pfizer's COVID-19 vaccine" src="https://via.placeholder.com/377x276" alt="Person with face mask" /> -->
	<Content />
	<Content />
	<topics-card />
	<banner />
	<info />
	<related-pages />
	<Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import Carousel from '../components/Carousel.vue';
import Content from '../components/Content.vue';
import TopicsCard from '../components/TopicsCard.vue';
import Banner from '../components/Banner.vue';
import Info from '../components/Info.vue';
import RelatedPages from '../components/RelatedPages.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
	Header,
	Navigation,
	Hero,
	Carousel,
	Content,
	TopicsCard,
	Banner,
	Info,
	RelatedPages,
	Footer,
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
	};
  }
};
</script>

<style>

</style>
