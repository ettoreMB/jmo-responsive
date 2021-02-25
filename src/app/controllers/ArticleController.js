const Article = require('../models/Articles')

module.exports = {
 async post(req, res) {
   try {
     let {title,description, post_body, category_id, 
      highlight
    } = req.body

     category_id = 1
     highlight = true
     const postId = await Article.create({
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