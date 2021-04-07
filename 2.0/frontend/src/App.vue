<template>
  <div id="app">
    <AdminLayout />
  </div>
</template>

<script>
import AdminLayout from './components/layout/AdminLayout.vue';

export default {
  name: 'App',
  components: {
    AdminLayout
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
