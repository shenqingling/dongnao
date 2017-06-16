const Sequelize = require('sequelize');
const sequelize = new Sequelize('dongnao_chat', 'root', '');

// sequelize demo
/* var User = sequelize.define('user', {
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

// // 用户
// const User = sequelize.define('user', {
//     username: Sequelize.STRING,
//     nickName: Sequelize.STRING,
//     password: Sequelize.STRING,
//     logo: Sequelize.STRING,
// });

// // 说说
// const Post = sequelize.define('post', {
//     title: Sequelize.STRING,
//     content: Sequelize.STRING,
//     image: Sequelize.STRING,
// // authorId: Sequelize.STRING,
// });
// Post.belongsTo(User);

// // 评论
// const Comment = sequelize.define('comment', {
//     content: Sequelize.STRING,
// });
// Comment.belongsTo(User);
// Comment.belongsTo(Post);

// // 点赞
// const Star = sequelize.define('star', {
// });
// Star.belongsTo(User);
// Star.belongsTo(Post);

// // 回复
// const Reply = sequelize.define('reply', {
//     content: sequelize.STRING
// });
// Star.belongsTo(Comment);

// // 先删除表在创建表
// // sequelize.sync({force:true});
// sequelize.sync({
//     force: true
// })