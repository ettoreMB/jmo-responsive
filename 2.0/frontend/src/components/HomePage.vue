<template>
  <div id="home">
    <div class="wrapper">
    <HomeHeader />
    <main class="main-content">
      <SideMenu />
      <HomeContent />
    </main>
    </div>
  </div>
</template>

<script>
import HomeHeader from './template/HomeHeader.vue';
import SideMenu from './template/Sidemenu/SideMenu.vue';
import HomeContent from './template/HomeContent.vue';

export default {
  name: 'HomePage',
  components: { HomeHeader, SideMenu, HomeContent },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  }
a {
  color: #42b983;
  }

#home {
  min-height: 100vh;
  background-image: url(../assets/images/graphic/layout/BG.jpg);
  color: #fff;
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
