const Articles = require('../models/Articles')

module.exports = {
  async index(req, res) {
    try {
      const articles = await Articles.findAll()
      console.log(articles)
      return res.render('pages/admin/artigos/article/index', {articles})
      
    } catch (error) {
      console.error(error)
    }
  },

  create(req, res) {
    return res.render('pages/admin/artigos/article/create')
  },

 async post(req, res) {
   try {
     let {title,description, post_body, category_id, 
      highlight
    } = req.body

     category_id = 1
     highlight = true
     const postArticleId = await Articles.create({
       title,
       description,
       post_body, 
       category_id ,
       highlight
     })

     return res.redirect('/admin')
     
   } catch (error) {
     console.error(error)
   }
 }


}