const ArticleGroup = require('../models/ArticleGroup');

module.exports = {
  async index(req, res) {
    try {
      const articlesGroup = await ArticleGroup.findAll();

      return res.render('pages/admin/artigos/group/index', {articlesGroup});
      
    } catch (error) {
      console.error(error);
    }
  },
    create(req, res) {
      return res.reder('pages/admin/artigos/group/index');

    },

 async post(req, res) {
   try {
     let { name } = req.body

     const postCategoryId = await ArticleGroup.create({
      name 
     });

     return res.redirect('/admin');
     
   } catch (error) {
     console.error(error);
   }
 }


}