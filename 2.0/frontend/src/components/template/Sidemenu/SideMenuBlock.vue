<template>
  <div class="sidemenu-block">
    <div class="title">
      <h3>
        {{title}}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenuBlock',
  props: ['title'],
};
</script>

<style scoped>

  .title {
    text-transform: uppercase;
    text-transform: uppercase;
    margin-left: -20px;
    width: 245px;
    padding: 8px 12px 0 0;
    text-align: right;
    color: #fff;
    font-size: 1rem;
    clear: both;
    box-shadow: 0 3px 0 0 rgba(0,0,0,0.5);
    margin-bottom: 20px;
    background: url(../../../assets/images/graphic/layout/sideBarTittleBG.png) no-repeat;
  }
</style>
