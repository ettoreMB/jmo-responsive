<template>
  <main class="content">
    <HomeCard title="Bem vindo">
      <img src="@/assets/images/graphic/layout/banner_home_website.jpg" alt="">
    </HomeCard>

    <HomeCard title="Fotos em destaque e animais para venda">
      <HomeAlbum />
    </HomeCard>

    <HomeCard title="Artigos em destaque">
      <HomePostCard />
    </HomeCard>

  </main>
</template>

<script>
import HomeCard from './HomeCard.vue';
import HomeAlbum from './HomeAlbum.vue';
import HomePostCard from './HomePostCard.vue';

export default {
  name: 'HomeContent',
  components: { HomeCard, HomeAlbum, HomePostCard },

};
</script>

<style scoped >
  .content {
    width: 100%;
    background: #fff;
    min-height: 100vh;
    grid-area: content;
    padding: 20px 22px;
  }

  .content img {
    width: 100%;
    box-shadow: 0 0 5px 0px #666;
    margin: 0 auto;
  }

</style>
