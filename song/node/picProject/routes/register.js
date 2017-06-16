module.exports = function(app) {
    app.get('/register', function(req, res) {
        res.render('register');
    });

    app.post('/register', function(req, res) {
        console.log(req.body);

        var User = global.dbHelper.getModel('User')
        var user = new User();
        user.uname = req.body.uname;
        user.upwd = req.body.upwd;
        user.save(function(err) {
            if (err) {
                console.log(err);
                res.send(200);
            } else {
                console.log('new user id saved.');
                mongoose.disconnect();
                res.send(404);
            }
        });

    });
};
