<template>
  <div class="home-card">
    <div class="title"><h2>{{title}}</h2></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: ['title'],

};
</script>

<style>
  .home-card {
    width: 100%;
  }

  .home-card .title {
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
    background-color: #54382b;
    height: 28px;
    border-bottom: 5px solid #a5727c;
  }

  .home-card .title > h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: 20px;
    color: #fff;
    background-color: #a21716;
    padding: 8px 10px;
    margin-left: 6px;
    margin-top: 4px;
    display: inline-block;
    font-weight: normal;
    opacity: 0.9;
    float: left;
    flex: 1;
}
</style>
