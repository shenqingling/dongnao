var model = require('../../config/model.js');
const redis = model.redis;

var express = require('express');
var router = express.Router();

router.get('/:user/:friend', (req, res) => {
    // req.query req.body req.params
    const user = req.params.user;
    const friend = req.params.friend;
    redis.lrange(`${user}_${friend}`, 0, 10, (err, list)=>{
        res.send(list);
    })
});

module.exports = router;
