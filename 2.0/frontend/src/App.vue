<template>
  <div id="app" class="home">
    <div class="wrapper">
      <HomeHeader />
      <main class="main-content">
        <SideMenu />
        <HomeContent />
      </main>

    </div>
    <Footer />
  </div>

</template>

<script>
import HomeHeader from '@/components/template/HomeHeader.vue';
import SideMenu from '@/components/template/Sidemenu/SideMenu.vue';
import Footer from '@/components/template/Footer.vue';
import HomeContent from '@/components/HomeComponents/HomeContent.vue';

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    SideMenu,
    Footer,
    HomeContent,
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

#app {
  font-family:'Libre Baskerville', serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  max-width: 1172px;
  margin: 0 auto;
}

.home {
  min-height: 100vh;
  background-image: url(./assets/images/graphic/layout/BG.jpg);
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
