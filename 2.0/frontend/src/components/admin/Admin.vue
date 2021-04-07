<template>
  <div class="admin">
    <b-table :items=events :fields="fields">
      <template #cell(actions)="">
        <b-button size="sm" class="mr2">Editar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Admin',
  data() {
    return {
      event: {},
      events: [],
      fields: [
        'id', 'name', 'actions'
      ]
    }
  },
  methods: {
    loadEvents() {
      axios.get('http://localhost:3333/events')
        .then(res => {
          this.events = res.data
        })
    }
  },
  mounted() {
    this.loadEvents()
  }
}
</script>

<style>

</style>