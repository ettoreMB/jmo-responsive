<template>
  <div class="article-category">
    <b-form>
      <input type="hidden" id="category-id" >

      <b-form-group label="Nome da Categoria" label-for="category-name">
        <b-form-input  type="text" id="category-name" placeholder="Nome da Categoria"/>
      </b-form-group>

      <b-form-group>
        <b-form-select />
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
export default {
  name: 'CategoryTab',
  data() {
    return {
      fields: ['ID', 'Nome', 'Grupo', 'Ações']
    }
  }
  
}
</script>

<style>

</style>