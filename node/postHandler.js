var fs = require('fs');
var querystring = require('querystring');

function start(response, postData){
	console.log('Request handler "start" was called.');
	var body = fs.readFileSync('./post.html');
	response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();
}

function upload(response, postData){
	console.log('Request handler "upload" was called.');
	response.writeHead(200, { 'Content-Type': 'text/html' });
	// response.write(string or Buffer)
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;