const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
// event.on('sql', () => {
//     console.log('hello,sql.');
// });

// // 发送事件的时间一定是>=5s的
// setTimeout(() => {
//     event.emit('sql');
// }, 2000);

// process.on('uncaughtException', (err) => {
//     console.log('啊哦，这里有个错误！');
// });

event.on('error', (err) => {
    console.log('啊哦，这里有个错误！');
});

event.emit('error', new Error('Whoops!'));
