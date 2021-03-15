const express = require('express');
const routes = express.Router();

const admin = require('./admin');


routes.get('/', (req,res) => {
  return res.render('pages/user/home');
})


routes.get('/eventos', (req,res) => {
  return res.render('pages/user/eventos')
})

routes.get('/fotos', (req,res) => {
  return res.render('pages/user/fotos')
})

routes.get('/videos', (req,res) => {
  return res.render('pages/user/videos')
})

routes.get('/livros', (req,res) => {
  return res.render('pages/user/livros')
})

routes.get('/contato', (req,res) => {
  return res.render('pages/user/contato')
})

routes.use('/admin', admin);

module.exports =  routes