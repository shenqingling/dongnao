var express = require('express');
var path = require('path');
var app = express();

var session = require('express-session');
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

var mongoose = require('mongoose');
// global是nodejs的全局对象
global.dbHelper = require('./dao/helper.js');
global.db = mongoose.connect('mongodb://localhost:32768/album');

// 解析POST请求的中间件
var bodyParser = require('body-parser');
// 文件处理
// var multer = require('multer');

// 配置静态目录
app.use(express.static('public'));

// 处理json数据
app.use(bodyParser.json());
// 处理utf8数据
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(multer());
// 导入页面
app.set('views', path.join(__dirname, 'pages'));
// 配置html引擎
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

// 自定义中间件
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) {
        res.locals.message = '<div class="alert alert-danger">' + err + '</div>';
    }
    next();
});


// 路由优化
require('./routes/routes.js')(app);

// 路由
app.get('/', function(req, res) {
    res.render('login');
});

var server = app.listen(3000, function() {
    console.log('app listening on port 3000');
});
