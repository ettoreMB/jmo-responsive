<template>
  <div class="videos">
    <HomeCard title="Eventos">
      Não há eventos cadastrados
    </HomeCard>
  </div>
</template>

<script>
import HomeCard from '@/components/HomeComponents/HomeCard.vue';

export default {
  name: 'Eventos',
  components: {
    HomeCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
