var http = require('http');
var fs = require('fs');

// https会报错，只能http
http.get('http://www.google.com', function(response) {
    console.log(response);

    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
        // 将网站相应数据写入文件
        // fs.appendFile('baidu.html', data);
    })
}).on('error', function(e) {
    // get方法报错
    console.log(e.message);
});
