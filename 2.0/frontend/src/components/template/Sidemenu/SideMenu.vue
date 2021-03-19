<template>
  <aside class="sideMenu">
    <SideMenuBlock title="Jumentos" />

      <div class="links">
        <li><a href="">Padrão da Raça</a></li>
        <li><a href="">Qualiade</a></li>
        <li><a href="">Temperamento</a></li>
        <li><a href="">Origem</a></li>
        <li><a href="">Curiosidade</a></li>
      </div>

    <SideMenuBlock title="Mulas e Burros"/>

      <div class="links">
        <li><a href="">Origem</a></li>
        <li><a href="">Padrão da Raça</a></li>
        <li><a href="">Qualidade</a></li>
        <li><a href="">Temperamento</a></li>
        <li><a href="">Curiosidade</a></li>
      </div>

    <SideMenuBlock title="Outros"/>

      <div class="links">
        <li><a href="">Muladeiros</a></li>
        <li><a href="">Tropeiro</a></li>
        <li><a href="">Marchas</a></li>
        <li><a href="">Artigos</a></li>
      </div>

  </aside>
</template>

<script>
import SideMenuBlock from './SideMenuBlock.vue';

export default {
  name: 'SideMenu',
  components: {
    SideMenuBlock,
  },
};

</script>

<style>
  .sideMenu {
    grid-area: side-menu;
    min-height: 100vh;
    background: #5f2e24;
  }

  .sideMenu .links {
    display: flex;
    flex-wrap: initial;
    flex-direction: column;
    text-transform: uppercase;
    padding: 0 15px ;
    margin-bottom: 2rem;

  }

  .sideMenu .links li {
    list-style: none;
    border-bottom: 3px solid #fff;
    text-align: end;

    padding-bottom: 7px;
    margin-top: 7px;

  }

  .sideMenu .links a {
    color: #fff;

  }
</style>
