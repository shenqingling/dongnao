/**
 * 爬虫作用：爬取QQ空间网页
 * 问题：QQ采取了反爬虫机制，拉下来的页面是一个提供下载的链接页面
 * 解决方法：增加请求头信息（Cookie，User-Agent），注意Cookie只能是从332518355接口获取的Cookie，其他接口获取的Cookie没用
 *
 * 还有一个问题：Cookie的实效问题
 */

// request模块封装了http模块，不是node自带的模块
var request = require('request');
var fs = require('fs');

// request('http://user.qzone.qq.com/332518355', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Show the HTML
//     fs.appendFile('qq.html', body);
//   }
// });

var url = 'http://user.qzone.qq.com/332518355';

function myRequest(url, callback) {
    var options = {
        url: url,
        // encoding: null,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
            'Cookie': 'verifysession=h01a59e50f4390892d6fe86d9bb767d44a0d8c81ce983305a6f477e8aeb684334e5dd9899d2b63d931d0ba6db29550a7496; RK=7a2qzLTnGx; pgv_pvi=5141940224; pgv_si=s8666843136; o_cookie=332518355; ptwebqq=8b928d8223a58fca859e02bac8c17bedb92ca8343397da606ff3b2cc121ac52e; pgv_info=ssid=s3863013318; pgv_pvid=9299727017; ptisp=ctc; ptcz=825c8398ebdedeaa4274a3dc581ffa746c203d84e27963b020c5bab9b42c7e81; rv2=80025085483E26EE99BF64790CFBC715F1388173F5E9FC4853; property20=DFAF84B90AAEAF5270C43FB036AC2750B02D4647415664CD7673EB50D41A3B65B92BC6991704FCB9; qqmusic_uin=0332518355; qqmusic_key=MgYAadbF6G; qqmusic_fromtag=6; qzmusicplayer=qzone_player_1114743415_1486048633180; __Q_w_s_hat_seed=1; qzspeedup=sdch; Loading=Yes; qz_screen=1280x800; QZ_FE_WEBP_SUPPORT=1; cpu_performance_v8=7; pt2gguin=o0332518355; uin=o0332518355; skey=MgYAadbF6G; p_uin=o0332518355; p_skey=ll*02nORRVQ5i43B6gqFa0AAML6GUXdDypksk5SHHO8_; pt4_token=RJiOVcCHQ34X7-wtwszhu-y3K1xz0IIVuob9Pw4DnKE_'
        }
    };
    request(options, callback);
}

function getContent(url) {
    myRequest(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            fs.appendFile('qq_cookie.html', body);
        }
    });
}

getContent(url);
