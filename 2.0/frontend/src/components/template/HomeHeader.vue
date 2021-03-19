<template>
  <header class="header">

    <div class="upside">
      <img src="@/assets/images/graphic/layout/h1_logo.png" alt="">
      <div class="social-links">
        <a href="/">
          <img src="@/assets/images/graphic/layout/facebook_social_icon.png" alt="">
        </a>
      </div>
    </div>

    <div class="header-nav">
          <a href="/" class="link">HOME</a>
          <a href="/eventos" class="link">EVENTOS</a>
          <a href="/fotos" class="link">FOTOS</a>
          <a href="/videos" class="link">VIDEOS</a>
          <a href="/livros" class="link">LIVROS</a>
          <a href="/contato" class="link">CONTATO</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
};

</script>

<style scoped>
  .header {
    width: 100%;
    display: grid;
    grid-template-rows: 2fr;
    margin-bottom: 30px;
    padding-top: 30px;
    grid-area: header;
  }

  .header .upside {
    justify-content: space-between;
    display: inline-flex;
    margin: 0 62px;
  }

  .header .header-nav {
  margin-top: 20px;
  background-color: var(--menu-color);
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(../../assets/images/graphic/layout/menu_home.png);
  }

.header .header-nav  a {
  color: #fff;
  margin-left: 23px;
  font-size: 1.2rem;
  }

</style>
