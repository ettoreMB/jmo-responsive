module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation

  const save = (req, res) => {
    const groupArticle ={
      id: req.body.id,
      name: req.body.name,
    }

    if(req.params.id) groupArticle.id == req.params.id

    try {
      existsOrError(groupArticle.name, 'Nome não informado')

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
  return { save}
}