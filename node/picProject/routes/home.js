module.exports = function(app) {
    app.get('/home', function(req, res) {
        if (req.session.user) {
            var Picture = global.dbHelper.getModel('Picture')
            Picture.find({}, function(err, pictures) {
                res.render('home', { Pictures: pictures });

            })
        } else {
            req.session.error = '请先登录';
            res.redirect('/login');
        }
    });
};
