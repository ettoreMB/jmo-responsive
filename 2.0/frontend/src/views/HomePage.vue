<template>
  <div id="home">
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
import HomeHeader from '@/components/HomeContent/HomeHeader.vue';
import SideMenu from '@/components/template/Sidemenu/SideMenu.vue';
import HomeContent from '@/components/HomeContent/HomeContent.vue';
import Footer from '@/components/template/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    SideMenu,
    HomeContent,
    Footer,

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
