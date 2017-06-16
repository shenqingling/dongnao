var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');

// https会报错，只能http
// 动脑学院的会员
http.get('http://101.200.129.112:4567/users/latest', function(response) {
    // console.log(response);
    var html = '';
    response.setEncoding('utf8');
    response.on('data', function(data) {
        // console.log(data); 
        html += data;
    });
    response.on('end', function() {
        // 页面内容获取完成，解析页面
        var $ = cheerio.load(html);
        $('div.users > ul#users-container > li > a').each(function(hre) {
            var href = this.attribs.href;
            // var href = $(this).attr('href');
            var name = href.substr(6, href.length);
            console.log(name);
        });
    });
}).on('error', function(e) {
    console.log(e.message);
});
