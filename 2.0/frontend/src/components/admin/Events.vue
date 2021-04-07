<template>
  <div class="admin">
    <b-form>
      <input type="hidden" id="event-id" v-model="event.id">
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="event-name">
            <b-form-input id="event-name" type="text" v-model="event.name"
              placeholder="Nome do evento"/>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Preco:" label-for="event-price">
            <b-form-input id="event-price" type="text" v-model="event.price"
              placeholder="Preco"/>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save'"
            @click="save"> Salvar
          </b-button>

          <b-button variant="danger" v-if="mode === 'remove'"
            @click="remove"> Excluir
          </b-button>
        </b-col>
      </b-row>

    </b-form>
    <b-table :items=events :fields="fields">
      <template #cell(actions)="row" >
        <b-button 
          size="sm"
          class="mr2"
          @click="loadEvent(row.item)"
        >
          Editar
        </b-button>

        <b-button 
          size="sm"
          variant="danger"
          class="mr2"
          @click="loadEvent(row.item, 'remove')"
        >
          Excluir
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '../../global'

export default {
  name: 'Admin',
  data() {
    return {
      mode: 'save',
      event: {},
      events: [],
      fields: [
        'id', 'name', 'actions'
      ]
    }
  },
  methods: {
    loadEvents() {
      const url = `${baseApiUrl}/events`
      axios.get(url)
        .then(res => {
          this.events = res.data
        })
    },
     save() {
       const method = this.event.id ? 'put' : 'post'
       const id = this.event.id ? `/${this.event.id}` : ''
       axios[method](`${baseApiUrl}/events${id}`, this.event)
        .then(() => {
          console.log('Foi')
        }).catch((err) => console.error(err))
     },
     loadEvent(event, mode = 'save') {
       this.mode = mode
       this.event = { ...event }
     },
     reset() {
       this.mode = 'save';
       this.event = {};
       this.loadEvents()
     },
     remove() {
       const id = this.event.id
       axios.delete(`${baseApiUrl}/events/${id}`)
        .then(() => {
          this.reset()
          console.log('apagou')
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