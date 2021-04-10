<template>
  <div class="article-category">
    <b-form>
      <input type="hidden" id="category-id" >

      <b-form-group label="Nome da Categoria" label-for="category-name">
        <b-form-input  type="text" id="category-name" placeholder="Nome da Categoria"/>
      </b-form-group>

      <b-form-group label="Grupo da Categoria" label-for="category-group">
        <b-form-select id="category-groupId"
          :options="groups"
          
        />
      </b-form-group>

      <b-form-group>
    
          <b-button 
            variant="primary"
      
          > Salvar
        </b-button>

         <b-button
           variant="danger"
     
            >Excluir
          </b-button> 

      </b-form-group>
      

    </b-form>
    <hr>

     <b-table hover striped  :fields="fields" :items=categories >
            <template  #cell(actions)="row">
                <b-button variant="warning" @click="loadCategory(row.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(row.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>

  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl} from '@/global';

export default {
  name: 'CategoryTab',
  data() {
    return {
      mode: 'save',
      category: {},
      categories: [],
      groups: [],
      fields: [
        {key:'id', label: 'Id', sortable: true},
        {key:'name', label: 'Nome', sortable: true},
        {key: 'group_name', label:'Grupo', sortable: true},
        {key: 'actions'}
        ]
    }
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`

      axios.get(url).then(res => 
        this.categories = res.data
      )
    },
    loadCategory(category, mode = "save") {
      this.mode = mode
      this.category = {...category}
    },
    loadGroups() {
      const url = `${baseApiUrl}/groupArticles`
      axios.get(url).then(res => {
        this.groups = res.data.map(group => {
          return {
            value: group.id,
            text: group.name
          }
          
        })
      })
    },
    
  },
  mounted() {
    this.loadCategories()
    this.loadGroups()
  },
}
</script>

<style>

</style>