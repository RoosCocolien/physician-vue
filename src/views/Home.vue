<template>
  <div class="home">
	<Header />
	<Navigation />
	<Hero />
	<ResourceCard />
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
import ResourceCard from '../components/ResourceCard.vue';
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
	ResourceCard,
	Content,
	TopicsCard,
	Banner,
	Info,
	RelatedPages,
	Footer,
  }
}
</script>

<style>

</style>
