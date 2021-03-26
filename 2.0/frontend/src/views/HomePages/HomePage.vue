<template>
  <div id="home">
    <HomeIndex />
  </div>
</template>

<script>
import HomeIndex from '@/components/HomeComponents/HomeIndex.vue';

export default {
  name: 'HomePage',
  components: {
    HomeIndex,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  min-height: 100vh;
  color: blue;
  line-height:1.6em;
  font-size: 100%;
}

.main-content {
  display: grid;
  grid-template-columns: 214px;
  grid-template-areas: "side-menu content";
  gap: 28px;

}

</style>
