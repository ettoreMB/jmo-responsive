const express = require('express');
const routes = express.Router()

const ArticleController = require('../app/controllers/ArticleController');
const ArticleGroupController = require('../app/controllers/ArticleGroupController');
const ArticleCategoryController = require('../app/controllers/ArticleCategoryController');



routes.get('/', (req,res) => {
  return res.render('pages/admin/index')
});

/*Artigos*/
routes.get('/artigos', ArticleController.index);
routes.get('/artigos/create', ArticleController.create);
routes.get('/artigos/:id/edit', ArticleController.edit);
routes.post('/artigos/article', ArticleController.post);

routes.get('/artigos/categorias', ArticleCategoryController.index);
routes.get('/artigos/categorias/create', ArticleCategoryController.create);
routes.post('/artigos/categorias', ArticleCategoryController.post);

routes.get('/artigos/grupos', ArticleGroupController.index);
routes.get('/artigos/grupos/create', ArticleGroupController.create);
routes.post('/artigos/grupos', ArticleGroupController.post);





/*Eventos*/
routes.get('/eventos/publi', (req,res) => {
  return res.render('pages/admin/eventos/adverts/index')
});
routes.get('/eventos', (req,res) => {
  return res.render('pages/admin/eventos/events/index')
});

/*Imagens*/
routes.get('/imagens/categoria', (req,res) => {
  return res.render('pages/admin/images/category/index')
});
routes.get('/imagens', (req,res) => {
  return res.render('pages/admin/images/index')
});

/*Livro*/
routes.get('/livros', (req,res) => {
  return res.render('pages/admin/livros/index')
});

/*Videos*/
routes.get('/videos', (req,res) => {
  return res.render('pages/admin/videos/index')
})

module.exports = routes