<template>
  <div class="others-tabs">
    <PageTitle icon="gear-fill" main="Administração" sub="Cadastro"/>
    <div class="tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Videos" active>
            
          </b-tab>
          <b-tab title="Livros"></b-tab>
          <b-tab title="Fotos"></b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTtile.vue'

export default {
  name: 'OthersTabs',
  components: {
    PageTitle,
  }
}
</script>

<style>

</style>