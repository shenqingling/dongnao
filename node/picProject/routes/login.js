module.exports = function(app) {
    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.post('/login', function(req, res) {
        var User = global.dbHelper.getModel('User')
        User.findOne({ 'uname': req.body.uname, 'upwd': req.body.upwd }, function(err, user) {
            if (user) {
                console.log('success');
                console.log(user);
                req.session.user = user;
                res.send(200);
            } else {
                console.log('用户名或密码错误');
                req.session.error = '用户名或密码错误';
                res.send(404);
            }
        });
    });
}
