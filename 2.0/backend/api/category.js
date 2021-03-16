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
      
    }
  }
  return { save}
}