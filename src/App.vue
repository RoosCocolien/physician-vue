<template>
  <div id="app">
	<navigation-menu />
	<app-header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue';
import NavigationMenu from './components/NavigationMenu/NavigationMenu.vue';

export default {
  components: { AppHeader, NavigationMenu },
}
</script>


<style lang="scss">

</style>
