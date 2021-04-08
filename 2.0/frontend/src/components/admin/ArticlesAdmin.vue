<template>
  <div class="articles-admin">
    <PageTitle icon="gear-fill" main="Administração" sub="Cadastro de Artigos"/>
    <div class="tabs">
      <b-card no-body>
        <b-tabs card>

          <b-tab title="Artigos">
            <ArticleTab />
          </b-tab>
          <b-tab title="Categorias">
            <ArticlesCategoires />
          </b-tab>
          <b-tab title="Grupos">
            <ArticlesGroups />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTtile.vue';
import ArticleTab from './ArticlesTabs/ArticleTab.vue';
import ArticlesCategoires from './ArticlesTabs/ArticlesCategories.vue';
import ArticlesGroups from './ArticlesTabs/ArticlesGroups.vue';

export default {
  name: 'ArticleAdmin',
  components: {
    PageTitle,
    ArticleTab,
    ArticlesCategoires,
    ArticlesGroups, 
  }
}
</script>

<style>

</style>