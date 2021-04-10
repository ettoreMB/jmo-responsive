module.exports = app => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

  const save = async (req, res) => {
    const groupArticle ={
      id: req.body.id,
      name: req.body.name,
    }

    if(req.params.id) groupArticle.id == req.params.id

    try {
      existsOrError(groupArticle.name, 'Nome não informado');

      const groupFromDB = await app.db('groupArticles')
        .where({ name: groupArticle.name }).first()
        if(!groupArticle.id) {
          notExistsOrError(groupFromDB, 'Este grupo já foi cadastrado')
        }

      if(groupArticle.id) {
        app.db('groupArticles')
          .update(groupArticle)
          .where({id: groupArticle.id})
          .then(_=> res.status(204).send())
      } else {
        app.db('groupArticles')
          .insert(groupArticle)
          .then(_=> res.status(204).send())
      }
    } catch (error) {
      res.send(error)
    }
  }

  const get = (req, res) =>{
    try {
      app.db('groupArticles')
      .then(groupArticles => res.json(groupArticles))
    } catch (error) {
      res.status(500).send('Não foi posivel fazer essa operação')
    }
    
  }

  const getById = (req, res) => {
    try {
      app.db('groupArticles')
      .where({ id: req.params.id})
      .first()
      .then( groupArticle => res.json(groupArticle))
    } catch (error) {
      res.status(500).send(error)
    }  

  }

  const remove = async (req, res) => {
   try {
    const categories = await app.db('categories')
      .where({ groupId: req.params.id })
      notExistsOrError(categories, 'Categoria possui artigos')

     const rowsDeleted = await app.db('groupArticles')
      .where({id: req.params.id}).del()

      existsOrError(rowsDeleted, 'Artigo não encontrado')
      res.status(204).send()
      
   } catch (error) {
    return res.status(400).send(error)
   }
      
  }
  return { save, get, getById, remove  }
}