var model = require('../../config/model.js');
const COMMENT = model.Comment;
const connect = model.connect;

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    var offset = req.query.offset;
    var limit = req.query.limit;
    if (offset && limit) {
        // 分页
        COMMENT.findAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).then((comments) => {
            res.send(comments);
        })
    } else {
        // 全部
        COMMENT.findAll().then((comments) => {
            res.send(comments);
        })
    }
});

// router.get('/detail', (req, res) => {
//     connect.query('select * from comments join users where posts.userId = users.id', { model: COMMENT })
//         .then((results, fields) => {
//             res.send(results);
//         });
// });

module.exports = router;
