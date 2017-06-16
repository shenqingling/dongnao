/*
 * 目标站点：http://588ku.com/beijing/0-0-pxnum-2-8-0-0-0-1/ (千库网－竖版背景)
 * 目标数据：图片链接
 * 作者： shenqingling
 * 时间：2017.02.26
 * export一个方法，传入目标网站URL，页码pageNum，页数size，返回数据
 */

var request = require('request');
var cheerio = require('cheerio'); // nodejs中的jquery
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32768/album'); // 连接

var Schema = mongoose.Schema; // 概念
var PicSchema = new Schema({ // 规则
    url: String,
    name: String
});
var Pictures = mongoose.model('Pictures', PicSchema); // 表
// var Picture = mongoose.model('Picture');

request('http://588ku.com/beijing/0-0-pxnum-2-8-0-0-0-1/', (err, res, body) => {
    if (!err && res.statusCode === 200) {
        // 页面获取成功
        // console.log(res);
        var $ = cheerio.load(body);
        var pics = $('#element .picture-list img');
        for (var i = 0; i < pics.length; i++) {
            // console.log(pics[i].attribs)
            // 因为延迟问题所以不行？？？？
            // console.log(pics[i].attribs.src)
            // 图片地址
            var url = pics[i].attribs['data-original']; //  属性获取
            var name = $(pics[i]).attr('alt'); // cheerio获取
            var pic = new Pictures();
            // 这个方式不行，报错没有save()方法
            // pic = {
            //     url: url,
            //     name: name
            // };
            pic.url = url;
            pic.name = name;
            // console.log(pic)
            pic.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('pic has saved.');
                }
            });
        }
    }
});

// 最大页数 133

