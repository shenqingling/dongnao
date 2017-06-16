var fs = require('fs');
var querystring = require('querystring');

function start(response, postData) {
    console.log('Request handler "start" was called.');
    var body = fs.readFileSync('./post.html');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('Request handler "upload" was called.');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // text对应的是网页的form表单中的字段
    // console.log(querystring.parse(postData).text);
    console.log(querystring.parse(postData));
    response.write("Hello " + querystring.parse(postData).name);
    response.write("Your email is " + querystring.parse(postData).email);
    response.end();
}

exports.start = start;
exports.upload = upload;
