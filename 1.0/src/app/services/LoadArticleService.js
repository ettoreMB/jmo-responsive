const Articles = require('../models/Articles')
const Article = require('../models/Articles')

const LoadService = {
  async LoadService(service, filter) {
    this.filter = filter
    return this[service]()
  },

  async Articles() {
    try {
      const articles = await Article.findAll()

    } catch (error) {
      console.error(error)
    }
  }
 }