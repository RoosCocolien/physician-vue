<template>
  <div class="home">
	<Header />
	<Navigation />
	<Hero />
	<Carousel :cards="this.Resources" />
	<!-- <ResourceCard title="Webinar" subTitle="Behind the scenes of developing Pfizer's COVID-19 vaccine" src="https://via.placeholder.com/377x276" alt="Person with face mask" /> -->
	<Content />
	<Content />
	<slideshow :cards="this.Topics" />
	<!-- <topics-card /> -->
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
import Slideshow from '../components/Slideshow.vue';
import Content from '../components/Content.vue';
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
	Banner,
	Info,
	RelatedPages,
	Footer,
	Slideshow,
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

<style>

</style>
