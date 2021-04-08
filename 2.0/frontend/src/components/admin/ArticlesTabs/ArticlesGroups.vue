<template>
  <div class="article-group">
    <b-form>
      <input type="hidden" id="group-id" >

      <b-form-group label="Nome do Grupo" label-for="group-name">
        <b-form-input  type="text" id="group-name" placeholder="Nome da Grupo"/>
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
  name: 'GroupTab',
  data() {
    return {
      fields: ['ID', 'Nome', 'Ações']
    }
  }
  
}
</script>

<style>

</style>