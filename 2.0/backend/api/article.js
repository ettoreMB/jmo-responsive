module.exports = app => {
  const { existsOrError } = app.api.validation
  const limit = 10

  const save = (req, res) => {
    try {
      const article = {...req.body}
    if(req.params.id) article.id = req.params.id

    const keys = Object.keys(req.body)
    for(key of keys) {
     if(req.body[key] == ""){
         return res.send("Preencha todos os campos")
     }
   
      
    }

    if(article.id) {
      app.db('articles')
        .update(article)
        .where({ id: article.id})
        .then(_=> res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('articles')
        .insert(article)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    }
    } catch (error) {
      res.error(error)
    }
  }

  const get = async (req, res) => {
    const page = req.query.page || 1

    const result = await app.db('articles').count('id').first()
    const count = parseInt(result.count)

    app.db('articles')
      .select('id', 'name', 'description')
      .limit(limit).offset(page * limit - limit)
      .then(articles => res.json({ data: articles, count, limit}))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    try {
      app.db('articles')
        .where({ id: req.params.id})
        .first()
        .then(article => {
          article.content = article.content.toString()
          return res.json(article)
          .catch(err => res.status(500).send(err))
        })
    } catch (error) {
      res.error(error)
    }
  }

  return {save, get , getById}
}