var model = require('../../config/model.js');
const POST = model.Post;
const connect = model.connect;

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    var offset = req.query.offset;
    var limit = req.query.limit;
    if (offset && limit) {
        // 分页
        POST.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).then((post) => {
            res.send(users);
        })
    } else {
        // 全部
        POST.findAll().then((users) => {
            res.send(post);
        })
    }
});

router.get('/detail', (req, res) => {
    connect.query('select * from posts join users where posts.userId = users.id', { model: POST })
        // connect.query('select * from posts join users where posts.userId = users.id')
        .then((results, fields) => {
            // var json = [];
            // results.map((result) => {
            //     var obj = results[i].dataValues;
            //     console.log(results[i])
            //     obj.user = {};
            //     obj.user.username = obj.username;
            //     obj.user.nickname = obj.nickname;
            //     obj.user.logo = obj.logo;
            //     obj.user.id = obj.userId;

            //     delete obj.username;
            //     delete obj.nickname;
            //     delete obj.logo;
            //     delete obj.userId;

            //     json.push(obj)
            // });
            // res.send(json);
            
            res.send(results);
        });
});

module.exports = router;
