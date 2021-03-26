<template>
  <div class="admin">
    <Header title="CMS-JMO" :hideToogle="true"/>
    <Menu />
    <router-view class="" name="admin"></router-view>
  </div>
</template>

<script>
import Header from '@/components/AdminComponents/Header.vue';
import Menu from '@/components/AdminComponents/Menu.vue';

export default {
  name: 'Admin',
  components: { Header, Menu },
};
</script>

<style>
* {
font-family: "Lato", sans-serif;
}
body {
margin: 0;
}
.admin {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
height: 100vh;
display: grid;
grid-template-rows: 60px 1fr 40px;
grid-template-columns: 300px 1fr;
grid-template-areas:
"header header"
"menu content"
"menu footer";
}
.admin.hide-menu {
grid-template-areas:
"header header"
"content content"
"footer footer";
}
</style>
