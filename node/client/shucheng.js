// request模块封装了http模块，不是node自带的模块
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');

// request('http://wanmeishijiexiaoshuo.org/book/174.html', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Show the HTML
//     fs.appendFile('xiaoshuo.txt', body);
//   }
// });

var url = 'http://wanmeishijiexiaoshuo.org/book/4476.html';

function myRequest(url, callback) {
    var options = {
        url: url,
        encoding: null
    };
    request(options, callback);
}

function getContent(url) {
    myRequest(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // 解析将gbk转换成utf8
            var html = iconv.decode(body, 'gb2312');
            // console.log(body); // Show the HTML
            var $ = cheerio.load(body);
            var content = $('.content p:not("script")').text();
            var urlPrev = $('a[rel="prev"]').attr('href');
            console.log(urlPrev);
            fs.appendFile('xiaoshuo.txt', content);
            getContent(urlPrev)
        }
    });
}

getContent(url);
