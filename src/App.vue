<template>
  <div id="app" class="md">
	<app-header />
	<navigation-menu />
    <router-view />
	<app-footer />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter/AppFooter.vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import NavigationMenu from './components/NavigationMenu/NavigationMenu.vue';

export default {
  components: { AppHeader, NavigationMenu, AppFooter },
}
</script>


<style lang="scss"></style>
