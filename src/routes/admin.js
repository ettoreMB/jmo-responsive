const express = require('express');
const routes = express.Router()


routes.get('/', (req,res) => {
  return res.render('pages/admin/index')
});

/*Artigos*/
routes.get('/artigos', (req,res) => {
  return res.render('pages/admin/artigos/article/index')
});
routes.get('/artigos/create', (req,res) => {
  return res.render('pages/admin/artigos/article/create')
});

routes.get('/artigos/categorias', (req,res) => {
  return res.render('pages/admin/artigos/category/index')
});
routes.get('/artigos/grupo', (req,res) => {
  return res.render('pages/admin/artigos/group/index')
});


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