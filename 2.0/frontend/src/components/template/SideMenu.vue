<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Menu</b-button>
    <b-sidebar 
      id="sidebar-backdrop"
      title="Menu" 
      shadown
      :backdrop-variant="variant"
      backdrop
    >
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item>Artigos</b-nav-item>
            <b-nav-item>Eventos</b-nav-item>
            <b-nav-item>Companheiros</b-nav-item>
            <b-nav-item>Outros</b-nav-item>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name:'SideMenu'
}
</script>

<style>

</style>