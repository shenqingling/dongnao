var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	name: 'shenqingling',
	email: 'sql370@qq.com'
});
var options = {
	hostname: '127.0.0.1',
	port: 8080,
	path: '/upload',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postData)
	}
};

var request = http.request(options, function(response){
	console.log(`STATUS: ${response.statusCode}`);
  	console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

	// 告诉服务端，我接收的数据格式
	response.setEncoding('utf8');
	response.on('data', function(data){
		console.log(data);	
	});

	response.on('end', function(data){
		console.log('No more data.');	
	});
});

request.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

request.write(postData);
request.end();