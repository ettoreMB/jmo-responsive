module.exports = app => {
    app.post('/signup', app.api.user.save)
        
    app.route('/groupArticles')
        .post(app.api.groupArticles.save)
        .get(app.api.groupArticles.get)

    app.route('/groupArticles/:id')
        .get(app.api.groupArticles.getById)
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
        

}