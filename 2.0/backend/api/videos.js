module.exports = app => {
  const { existsOrError } = app.api.validation


  const save = (req, res) => {
    try {
      const videos = {...req.body}
    if(req.params.id) videos.id = req.params.id

    const keys = Object.keys(req.body)
    for(key of keys) {
     if(req.body[key] == ""){
         return res.send("Preencha todos os campos")
     }
   
      
    }

    if(videos.id) {
      app.db('videos')
        .update(videos)
        .where({ id: videos.id})
        .then(_=> res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('videos')
        .insert(videos)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    }
    } catch (error) {
      res.error(error)
    }
  }

  const get = async (req, res) => {

    app.db('videos')
      .select('id', 'title', 'author', 'company', 'edition')
      .then(videos => res.json(videos))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app.db('videos')
      .where({ id: req.params.id })
      .first()
      .then(videos => { return res.json(videos) })
      .catch(err => res.status(500).send(err))
  }

  const remove = async(req, res) => {
    try {
      const rowsDeleted = await app.db('videos')
        .where({ id: req.params.id}).del()

        existsOrError(rowsDeleted, 'livro não foi encontrado.')
        return res.status(400).send(msg)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  
  return {save, get , getById, remove}
}