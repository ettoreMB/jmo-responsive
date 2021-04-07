module.exports = app => {
  const { existsOrError } = app.api.validation
  const limit = 10

  const save = (req, res) => {
    try {
      const events = {...req.body}
    if(req.params.id) events.id = req.params.id

    const keys = Object.keys(req.body)
    for(key of keys) {
     if(req.body[key] == ""){
         return res.send("Preencha todos os campos")
     }
   
      
    }

    if(events.id) {
      app.db('events')
        .update(events)
        .where({ id: events.id})
        .then(_=> res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('events')
        .insert(events)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    }
    } catch(error) {
      res.send(error)
    }
  }

  const get = async (req, res) => {

    app.db('events')
      .select('id', 'name', 'city', 'state', 'district', 'adress', 'description', 'price', 'date')
      .then(events => res.json(events))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app.db('events')
      .where({ id: req.params.id })
      .first()
      .then(event => { return res.json(event) })
      .catch(err => res.status(500).send(err))
  }

  const remove = async(req, res) => {
    try {
      const rowsDeleted = await app.db('events')
        .where({ id: req.params.id}).del()
        try {
          existsOrError(rowsDeleted, 'Evento não foi encontrado.')
        } catch(msg) {
          return res.status(400).send(msg)
        }
        
         res.status(204).send()
    } catch (error) {
      res.status(500).send(error)
    }
  }

  
  return {save, get , getById, remove}
}