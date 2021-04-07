<template>
  <div class="admin-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminContent',
};
</script>

<style>
      .admin-content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
        min-height: 100vh;
    }
</style>
