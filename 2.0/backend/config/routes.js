module.exports = app => {
    app.post('/signup', app.api.user.save)
        
    app.route('/groupArticles')
        .post(app.api.groupArticles.save)
        .get(app.api.groupArticles.get)

    app.route('/groupArticles/:id')
        .get(app.api.groupArticles.getById)
        .put(app.api.groupArticles.save)
        .delete(app.api.groupArticles.remove)


    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.route('/articles')
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/articles/:id')
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/adverts')
        .post(app.api.adverts.save)
        .get(app.api.adverts.get)

    app.route('/adverts/:id')
        .delete(app.api.adverts.remove)
        .get(app.api.adverts.getById)
        .put(app.api.adverts.save)

    app.route('/events')
        .post(app.api.events.save)
        .get(app.api.events.get)


    app.route('/events/:id')
        .delete(app.api.events.remove)
        .put(app.api.events.save)
        .get(app.api.events.getById)

    app.route('/books')
        .post(app.api.books.save)
        .get(app.api.books.get)

    app.route('/books/:id')
        .get(app.api.books.getById)
        .delete(app.api.books.remove)
        .put(app.api.books.save)

    app.route('/videos')
        .post(app.api.videos.save)
        .get(app.api.videos.get)

    app.route('/videos/:id')
        .get(app.api.videos.getById)
        .delete(app.api.videos.remove)
        .put(app.api.videos.save)
        
        

}