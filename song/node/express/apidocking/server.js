// 例子来源：http://datatables.club/example/data_sources/ajax.html
var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post('/login', function(req, res) {
    var passport = { uname: 'admin', upwd: '1' };
    console.log(req.body);
    console.log(passport);
    if (req.body.uname === passport.uname && req.body.upwd === passport.upwd) {
        console.log('success');
        res.sendStatus(200);
    } else {
        console.log('fail');
        res.sendStatus(500);
    }
})
app.get('/arrays.json', function(req, res) {
    res.sendFile(path.join(__dirname, './database/arrays.json'));
})

app.get('/chinese.json', function(req, res) {
    res.sendFile(path.join(__dirname, './database/chinese.json'));
})
server.listen(3000, function() {
    console.log('Server is starting on port 3000.')
})
