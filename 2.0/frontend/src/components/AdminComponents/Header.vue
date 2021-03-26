<template>
  <heade class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      {{title}}
    </h1>
  </heade>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    hideToogle: Boolean,
  },
  computed: {
    icon() {
      return 'fa-angle-left';
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu');
    },
  },
};

</script>

<style scoped>
  .header {
    width: 100vw;
    background: rgb(184, 72, 72);
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: header;
  }

  .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    }

   .header .toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
