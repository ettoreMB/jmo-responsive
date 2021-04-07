<template>
  <div class="page-title">
    <h1><b-icon v-if="icon" :icon="icon" font-scale="0.9"></b-icon>{{main}}</h1>
    <h2>{{sub}}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['icon', 'main','sub']
}
</script>

<style>

</style>