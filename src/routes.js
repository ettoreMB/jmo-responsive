const express = require('express')
const routes = express.Router()


routes.get('/', (req,res) => {
  return res.render('pages/home')
})

routes.get('/eventos', (req,res) => {
  return res.render('pages/eventos')
})

routes.get('/fotos', (req,res) => {
  return res.render('pages/fotos')
})

routes.get('/videos', (req,res) => {
  return res.render('pages/videos')
})

routes.get('/livros', (req,res) => {
  return res.render('pages/livros')
})

routes.get('/contato', (req,res) => {
  return res.render('pages/contato')
})

routes.get('/admin', (req,res) => {
  return res.render('pages/admin/index')
})

routes.get('/admin/post/create', (req,res) => {
  return res.render('pages/admin/artigos/article/create')
})


module.exports = routes