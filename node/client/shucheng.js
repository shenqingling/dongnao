/**
 * 爬虫作用：获取一本小说
 */

// request模块封装了http模块，不是node自带的模块
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconv = require('iconv-lite');
var mongoose = require('mongoose');

// shucheng 是数据库的名字
mongoose.connect('mongodb://localhost:32768/shucheng');
// 注册
var Schema = mongoose.Schema;
var textSchema = new Schema({
    content: String
});
// 根据［textSchema］的规则注册一张名为［Text］的表格
var Text = mongoose.model('Text', textSchema);

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
            $('.content script').remove();
            var content = $('.content p').text();
            // text
            var text = new Text();
            text.content = content;
            text.save(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('successfully, saved to MongoDB');
                }
            });
            var urlPrev = $('a[rel="prev"]').attr('href');
            console.log(urlPrev);
            fs.appendFile('xiaoshuo.txt', content);
            getContent(urlPrev)
        }
    });
}

getContent(url);
