<template>
  <header class="header">
    <b-navbar tytpe="dark" toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <SideMenu />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import SideMenu from './SideMenu.vue'
export default {
  name:'Header',
  components: {
    SideMenu
  }
}
</script>

<style>
  .header {
    grid-area: header;
    background: brown;
  }
</style>