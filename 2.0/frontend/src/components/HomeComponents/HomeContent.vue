<template>
  <main class="content">
      <router-view></router-view>
  </main>
</template>

<script>

export default {
  name: 'HomeContent',
};
</script>

<style scoped >
  .content {
    background: #fff;
    min-height: 100vh;
    grid-area: content;
    padding: 0px 22px;
  }

  .content img {
    width: 100%;
    box-shadow: 0 0 5px 0px #666;
    margin: 0 auto;
  }

</style>
