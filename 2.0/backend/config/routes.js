module.exports = app => {
    app.post('/signup', app.api.user.save)

    app.post('/categories', app.api.category.save)


    app.post('/articlesGroup', app.api.groupArticles.save)
}