<template>
  <div class="article">
    <b-form>
      <input type="hidden" id="article-id" >

      <b-form-group label="Nome do Artigo" label-for="article-name">
        <b-form-input  type="text" id="article-name" placeholder="Nome do Artigo"/>
      </b-form-group>

      <b-form-group label="Descrição do Artigo" label-for="article-description">
        <b-form-input  type="text" id="article-description" placeholder="Descrição do Artigo"/>
      </b-form-group>

      <b-form-group label="Conteúdo" label-for="article-content" >
        <VueEditor placeholder="Conteudo do Artigo"/>
      </b-form-group>

      <b-form-group>
    
          <b-button 
            variant="primary"
            @click="save"
          > Salvar
        </b-button>

         <b-button
           variant="danger"
            @click="remove"
            >Excluir
          </b-button> 

      </b-form-group>
      

    </b-form>
    <hr>

     <b-table hover striped  :fields="fields">
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
import {VueEditor} from 'vue2-editor'

export default {
  name: 'ArticleTab',
  components: { VueEditor },
  data() {
    return {
      fields: ['ID', 'Nome', 'Descrição', 'Ações']
    }
  }
  
}
</script>

<style>

</style>