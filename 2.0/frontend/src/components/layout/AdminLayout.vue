<template>
 <div class="adminLayout">
   <Header />
   <AdminContent />
  </div>
</template>

<script>
import Header from '../template/Header.vue'
import AdminContent from '../template/AdminContent.vue';

export default {
  name: 'AdminLayout',
  components: {
    Header,
    AdminContent
  }
}
</script>

<style>
  .adminLayout {
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-areas: 
      "header"
      "content"
    ;   
  }
</style>