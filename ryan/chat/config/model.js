var account = require('./account.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('dongnao_chat', account.username, account.password);

// sequelize demo
/*
var User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
    return User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});
*/


// 用户
const User = sequelize.define('user', {
    username: Sequelize.STRING,
    nickname: Sequelize.STRING,
    password: Sequelize.STRING,
    logo: Sequelize.STRING,
});

// 说说
const Post = sequelize.define('post', {
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    image: Sequelize.STRING,
    // authorId: Sequelize.STRING,
});
Post.belongsTo(User);

// 评论
const Comment = sequelize.define('comment', {
    content: Sequelize.STRING,
});
Comment.belongsTo(User);
Comment.belongsTo(Post);

// 点赞
const Star = sequelize.define('star', {});
Star.belongsTo(User);
Star.belongsTo(Post);

// 回复
const Reply = sequelize.define('reply', {
    content: Sequelize.STRING
});
Reply.belongsTo(Comment);

// 发送添加好友请求
const Request = sequelize.define('request', {
    content: Sequelize.STRING,
    response: Sequelize.BOOLEAN,
    read: Sequelize.BOOLEAN,
});
Request.belongsTo(User, { as: 'from' });
Request.belongsTo(User, { as: 'to' });

// 好友关系表
const Relation = sequelize.define('relation', {});
User.belongsToMany(User, { as: 'friend', through: Relation }); // 多对多关系

// 数据库表之间关系
// User.hasOne(User, { as: 'wife', through: Relation }); // 一对一
// User.hasMany(User, { as: 'son', through: Relation }); // 一对多
// User.belongsToMany(User, { as: 'friend', through: Relation }); // 多对多

// const Friendship = sequelize.define('friendship', {});
// FriendShip.belongsToMany(User, { through: Friendship, as: 'friend' });

// 先删除表在创建表
// sequelize.sync({ force: true });
// sequelize.sync()

module.exports = {
    User,
    Post,
    Comment,
    Star,
    Reply,
    Request,
    Relation,
    connect: sequelize
}
