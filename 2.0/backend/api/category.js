module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation

  const save = (req, res) => {
    const category ={
      id: req.body.id,
      name: req.body.name,
      groupId: req.body.groupId
    }

    if(req.params.id) category.id == req.params.id

    try {
      existsOrError(category.name, 'Nome não informado')

      if(category.id) {
        app.db('categories')
          .update(category)
          .where({id: category.id})
          .then(_=> res.status(204).send())
      } else {
        app.db('categories')
          .insert(category)
          .then(_=> res.status(204).send())
      }
    } catch (error) {
      res.status(400).send(error)
    }
  }

  const remove = async (req, res) => {
    try {
      existsOrError(req.params.id, 'Categoria não encontrada')

      const articles = await app.db('articles')
        .where({ categoryId: req.params.id })
      notExistsOrError(articles, 'Categoria possui artigos')

      const rowsDeleted = await app.db('categories')
        .where({ id: req.params.id }).del()
      existsOrError(rowsDeleted, 'Categoria não foi encontrada')

      req.status(204).send()
    } catch (error) {
      res.status(400).send(error)
    }
  }

  const get = (req, res) => {
    try {
        app.db('categories')
        .select('id', 'name')
        .then(category => res.json(category))
    } catch (msg) {
        res.status(500).send('Não foi posivel fazer essa operação')
    }
       
  }

  const getById = (req,res) => {
    app.db('categories')
      .where({ id: req.params.id})
      .first()
      .then(category => res.json(category))
      .catch(err => res.status(500).send(err))

  }
  
  return { save, remove, getById, get}
}