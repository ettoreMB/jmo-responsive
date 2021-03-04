const Articles = require('../models/Articles')
const ArticleCategory = require('../models/ArticleCategory')
const { convertDeltaToHtml, convertTextToDelta, convertHtmlToDelta } = require('node-quill-converter')
var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;

module.exports = {
  async index(req, res) {
    try {
      const articles = await Articles.findAll()
      return res.render('pages/admin/artigos/article/index', {articles})
      
    } catch (error) {
      console.error(error)
    }
  },

  async  create(req, res) {
    const categories = await ArticleCategory.findAll()
    return res.render('pages/admin/artigos/article/create', { categories})
  },

  async edit(req, res) {
    const article = await Articles.find(req.params.id)
    const categories = await ArticleCategory.findAll()

    return res.render('pages/admin/artigos/article/edit', {article, categories})
  },

  async post(req, res) {
   try {
     let {
       title,description,
       article_body,
       category_id, 
       status
      } = req.body

       article_body = JSON.stringify(convertTextToDelta(article_body))

     const postArticleId = await Articles.create({
       title,
       description,
       article_body, 
       category_id ,
       status: status || 0
     })

     return res.redirect('/admin/artigos/create')
     
   } catch (error) {
     console.error(error)
   }
 },


}