var express = require('express');
var app = express();
// 静态文件
app.use(express.static('public'));

// Express起一个3000端口的服务
app.get('/', function(req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});