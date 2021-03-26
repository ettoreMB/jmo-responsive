<template>
  <div id="app">
    <HomeLayout v-if="this.$route.meta.layout === 'home'"/>
    <AdminLayout v-if="this.$route.meta.layout === 'admin'" />
  </div>

</template>

<script>
import HomeLayout from './layouts/HomeLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';

export default {
  name: 'HomePage',
  components: {
    HomeLayout,
    AdminLayout,
    /* HomeHeader,
    SideMenu,
    Footer,
    HomeContent, */
  },

};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
}
a{
  text-decoration: none;
}

</style>
