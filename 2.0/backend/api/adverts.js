module.exports = app => {
  const { existsOrError } = app.api.validation
  const limit = 10

  const save = (req, res) => {
    try {
      const adverts = {...req.body}
    if(req.params.id) article.id = req.params.id

    const keys = Object.keys(req.body)
    for(key of keys) {
     if(req.body[key] == ""){
        return res.send("Preencha todos os campos")
     }
   
      
    }

    if(adverts.id) {
      app.db('adverts')
        .update(adverts)
        .where({ id: adverts.id})
        .then(_=> res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('adverts')
        .insert(adverts)
        .then(_ => res.status(204).send(adverts))
        .catch(err => res.status(500).send(err))
    }
    } catch (error) {
      res.error(error)
    }
  }

  const get = async (req, res) => {
    
    app.db('adverts')
      .select('id', 'name', 'linkAdress')
      .then(adverts => res.json({ adverts }))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app.db('adverts')
      .where({ id: req.params.id })
      .first()
      .then(adverts => { res.json(adverts) })
      .catch(err => res.status(500).send(err))
  }

  const remove = async(req, res) => {
    try {
      const rowsDeleted = await app.db('adverts')
        .where({ id: req.params.id}).del()

        existsOrError(rowsDeleted, 'Advert Não encontrado')

        return res.status(400).send(msg)
    } catch (msg) {
      res.status(500).send(msg)
    }
  }

  
  return {save, get , getById, remove}
}