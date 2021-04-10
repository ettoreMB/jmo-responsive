<template>
  <div class="article-group">
    <b-form>
      <input type="hidden" id="group-id" v-model="group.id">

      <b-form-group label="Nome do Grupo" label-for="group-name">
        <b-form-input  type="text" id="group-name" placeholder="Nome da Grupo" v-model="group.name"/>
      </b-form-group>
 
      <b-form-group>
          <b-button 
            variant="primary"
            v-if="mode === 'save'"
            @click="save"
          > Salvar
        </b-button>

         <b-button
          variant="danger"
          v-if="mode === 'remove'"
          @click="remove"
            >Excluir
          </b-button> 

      </b-form-group>
      

    </b-form>
    <hr>

     <b-table hover striped  :fields="fields" :items=groups >
            <template  #cell(actions)="row">
                <b-button variant="warning" @click="loadGroup(row.item)" class="mr-2">
                    Editar
                </b-button>
                <b-button variant="danger" @click="loadGroup(row.item, 'remove')">
                    Excluir
                </b-button>
            </template>
        </b-table>

  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl} from '@/global';

export default {
  name: 'GroupTab',

  data() {
    return {
    mode: 'save',
    group: {},
    groups: [],
    fields: [
      {key: 'id', label:'Id', sortable: true},
      {key: 'name',label:'Nome', sortable: true},
      {key: 'actions'}

      ]
    }
  },
  methods: {
    save() {
      const method = this.group.id ? 'put' : 'post'
      const id = this.group.id ? `/${this.group.id}` : ''
      axios[method](`${baseApiUrl}/groupArticles${id}`, this.group)
        .then(() => {
          console.log('Grupo Cadastrado')
        }).catch (err => console.error(err))
    },
    remove() {
      const id = this.group.id
      axios.delete(`${baseApiUrl}/groupArticles/${id}`)
        .then(()=>{
          this.reset()
          console.log('Apagou')
        } )
    },
    reset() {
      this.mode = 'save';
      this.group = {};
      this.loadGroups();
    },
    loadGroup(group, mode ="save") {
      this.mode = mode
      this.group = {...group}
    },
    loadGroups() { 
      const url = `${baseApiUrl}/groupArticles`

      axios.get(url).then(res => 
        this.groups = res.data
      )
    },
  },
  mounted() {
    this.loadGroups()
  }
  
}
</script>

<style>

</style>