var express = require('express');
var cors = require('cors');
var app = express();

// 接口返回数据格式优化
app.set('json spaces', 4);

var user = require('./apps/user');
var post = require('./apps/post');
var comment = require('./apps/comment');

app.get('/', (req, res) => {
    res.send('hello world');
});

// 解决跨域
app.use(cors());

app.use('/user', user);
app.use('/post', post);
app.use('/comment', comment);

app.listen(3000)
