// 例子来源：http://datatables.club/example/data_sources/ajax.html
var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var path = require('path');
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
})
app.get('/arrays.json', function(req, res) {
    res.sendFile(path.join(__dirname, './database/arrays.json'))
})

app.get('/chinese.json', function(req, res) {
    res.sendFile(path.join(__dirname, './database/chinese.json'))
});

app.get('/tickettype.json', function(req, res) {
    res.sendFile(path.join(__dirname, './database/tickettype.json'))
});

app.get('/register', function(req, res) {
    res.header("Content-Type", "text/html;charset=utf-8");
    res.render('register');
});

app.get('/login', function(req, res) {
    res.header("Content-Type", "text/html;charset=utf-8");
    res.render('login');
});

app.post('/login', function(req, res) {
    var passport = {
        uname: 'admin',
        upwd: '1'
    }
    console.log(req.body)
    console.log(passport)
    if (req.body.uname === passport.uname && req.body.upwd === passport.upwd) {
        res.sendStatus(200);
        console.log('success')
    } else {
        console.log('error')
        res.sendStatus(500);
    }
})
server.listen(3000, function() {
    console.log('server is starting on port 3000.')
})
