var fs = require('fs');

function start(response){
	console.log('Request handler "start" was called.');
	var body = fs.readFileSync('./post_file.html');
	response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();
}

exports.start = start;
