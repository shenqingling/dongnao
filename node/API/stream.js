// var fs = require('fs');

// 读取小文件
// fs.readFile('./event.js', (err, data) => {
//     console.log(data.toString());
// });

// 读取大文件 好像不够大 －－
fs.readFile('video.vep', (err, data) => {
    console.log(data.toString());
});
