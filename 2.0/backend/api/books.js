module.exports = app => {
  const { existsOrError } = app.api.validation


  const save = (req, res) => {
    try {
      const books = {...req.body}
    if(req.params.id) books.id = req.params.id

    const keys = Object.keys(req.body)
    for(key of keys) {
     if(req.body[key] == ""){
         return res.send("Preencha todos os campos")
     }
   
      
    }

    if(books.id) {
      app.db('books')
        .update(books)
        .where({ id: books.id})
        .then(_=> res.status(204).send())
        .catch(err => res.status(500).send(err))
    } else {
      app.db('books')
        .insert(books)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    }
    } catch (error) {
      res.error(error)
    }
  }

  const get = async (req, res) => {

    app.db('books')
      .select('id', 'title', 'author', 'company', 'edition')
      .then(books => res.json(books))
      .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
    app.db('books')
      .where({ id: req.params.id })
      .first()
      .then(books => { return res.json(books) })
      .catch(err => res.status(500).send(err))
  }

  const remove = async(req, res) => {
    try {
      const rowsDeleted = await app.db('books')
        .where({ id: req.params.id}).del()

        existsOrError(rowsDeleted, 'livro não foi encontrado.')
        return res.status(400).send(msg)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  
  return {save, get , getById, remove}
}