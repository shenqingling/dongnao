module.exports = function(app) {
    app.get('/upload', function(req, res) {
        res.render('upload');
    });
}
