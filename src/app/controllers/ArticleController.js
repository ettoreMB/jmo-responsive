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

 async post(req, res) {
   try {
     let {title,description, post_body, category_id, 
      highlight
    } = req.body

     category_id = 1
     highlight = true
     const postId = await Articles.create({
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