var model = require('../../config/model.js');
const USER = model.User;

var express = require('express');
var router = express.Router();

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

module.exports = router;
