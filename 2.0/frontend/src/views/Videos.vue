<template>
  <div id="home">
    <div class="wrapper">
    <HomeHeader />
    <main class="main-content">
      <SideMenu />

    </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeContent/HomeHeader.vue';
import SideMenu from '@/components/template/Sidemenu/SideMenu.vue';

import Footer from '@/components/template/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    SideMenu,
    Footer,

  },

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
