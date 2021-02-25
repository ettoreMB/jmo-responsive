const ArticleCategory = require('../models/ArticleCategory');
const ArticleGroup = require('../models/ArticleGroup');

module.exports = {
  async index(req, res) {
    try {
      const articlesCategories = await ArticleCategory.findAll()

      return res.render('pages/admin/artigos/category/index', {articlesCategories});
      
    } catch (error) {
      console.error(error)
    }
  },

  async create(req,res)  {
    const categoriesGroups = await ArticleGroup.findAll()
    console.log(categoriesGroups)
    return res.render('pages/admin/artigos/category/create', {categoriesGroups});
  },

 async post(req, res) {
   try {
     let { name, group_id} = req.body

      

     const postCategoryId = await ArticleCategory.create({
      name, 
      group_id
     })

     return res.redirect('/admin')
     
   } catch (error) {
     console.error(error)
   }
 }


}