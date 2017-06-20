var model = require('../../config/model.js');
const USER = model.User;
const connect = model.connect;

var express = require('express');
var router = express.Router();

// 用户列表
router.get('/', (req, res) => {
    var offset = req.query.offset;
    var limit = req.query.limit;
    if (offset && limit) {
        // 分页
        USER.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).then((users) => {
            res.send(users);
        })
    } else {
        // 全部
        USER.findAll().then((users) => {
            res.send(users);
        })
    }
});

// 用户详情数据
router.get('/:id', (req, res) => {
    USER.findById(req.params.id)
        .then(item => {
            res.send(item)
        });
})

// 接口符合RESTFUL规范
// 用户文章
// ? 占位符
router.get('/:id/post', (req, res) => {
    connect.query('select * from posts where userId = ?;', {
        model: model.Post,
        replacements: [req.params.id]
    }).then(list => {
        res.send(list)
    })
})

// 用户好友
router.get('/:id/friend', (req, res) => {
    connect.query(`SELECT * 
        FROM users 
        WHERE 
        id IN (SELECT userId FROM relations WHERE friendId = ?) 
        OR 
        id IN (SELECT friendId FROM relations WHERE userId = ?);`, {
        model: model.User,
        replacements: [req.params.id, req.params.id]
    }).then(list => {
        res.send(list)
    })
})

// 用户详情数据
router.get('/:id/detail', (req, res) => {
    USER.findById(req.params.id)
        .then(item => {
            connect.query('select * from posts where userId = ?;', {
                model: model.Post,
                replacements: [req.params.id]
            }).then(list => {
                item.dataValues.posts = list;

                connect.query(`SELECT * 
                    FROM users 
                    WHERE 
                    id IN (SELECT userId FROM relations WHERE friendId = ?) 
                    OR 
                    id IN (SELECT friendId FROM relations WHERE userId = ?);`, {
                    model: model.User,
                    replacements: [req.params.id, req.params.id]
                }).then(list => {
                    item.dataValues.friends = list;
                    res.send(item);
                })
            })
        });
});

// 用户添加新说说
router.post('/:id/post', (req, res) => {
    console.log(req.body);
    model.Post.create({
        userId: req.params.id,
        // 需要配合使用中间件 bodyParser
        title: req.body.title,
        content: req.body.content
    }).then((item) => {
        console.log(item);
        res.send(item);
    })
})

// 用户添加新好友
router.post('/:id/friend', (req, res) => {
    connect.query(
        `INSERT INTO 
        relations (createdAt, updatedAt, userId, friendId) 
        VALUES (NOW(), NOW(), ?, ?)`, {
            model: model.Relation,
            replacements: [req.params.id, req.body.friendId]
        }).then(item => {
        res.send(item)
    })
})

module.exports = router;
