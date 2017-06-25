var model = require('../../config/model.js');
const USER = model.User;
const POST = model.Post;
const RELATION = model.Relation;
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
        model: POST,
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
                model: POST,
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
    POST.create({
        userId: req.params.id,
        // 需要配合使用中间件 bodyParser
        title: req.body.title,
        content: req.body.content
    }).then((item) => {
        res.send(item);
    })
})

// 用户删除说说
router.delete('/:id/post', (req, res) => {
    var posts = req.body.postId.split(',');
    POST.destroy({
        where: {
            id: { $or: posts }
        }
    }).then(item => {
        res.send(item);
    })
})

// 用户编辑说说
router.put('/:id/post', (req, res) => {
    /* POST.update({
         title: req.body.title,
         content: req.body.content
     }, {
         where: {
             id: req.body.postId
         }
     }).then(item => {
         res.send(item);
     })*/

    POST.findById(req.body.postId).then(item => {
        if (item) {
            item.update({
                title: req.body.title,
                content: req.body.content
            }).then(item => {
                res.send(item);
            })
        }
    })

})

// 用户添加新好友
router.post('/:id/friend', (req, res) => {
    connect.query(
        `INSERT INTO 
        relations (createdAt, updatedAt, userId, friendId) 
        VALUES (NOW(), NOW(), ?, ?)`, {
            replacements: [req.params.id, req.body.friendId]
        }).then(item => {
        res.send(item)
    })
})

// 用户移除好友
router.delete('/:id/friend', (req, res) => {
    var friends = req.body.friendId.split(',');
    // 单个删除没问题
    /*RELATION.findAll({
        where: {
            $or: [{
                userId: req.params.id,
                friendId: { $in: friends }
            }, {
                userId: { $in: friends },
                friendId: req.params.id
            }]
        }
    }).then(list => {
        console.log(list);
        list[0].destroy().then(item => {
            res.send(item);
        })
    })*/

    // 多个删除
    RELATION.destroy({
        where: {
            $or: [{
                userId: req.params.id,
                friendId: { $in: friends }
            }, {
                userId: { $in: friends },
                friendId: req.params.id
            }]
        }
    }).then(item => {
        console.log(item)
        res.send(item);
    })
})

module.exports = router;
