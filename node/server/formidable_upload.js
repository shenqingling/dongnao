var formidable = require('formidable'),
	http = require('http'),
	util = require('util'),
	fs = require('fs');

http.createServer(function(request, response){
	if(request.url === '/upload' && request.method.toLowerCase() === 'post'){
		var form = new formidable.IncomingForm();

		form.parse(request, function(err, fields, files){
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.write('receives upload:\n\n');
			response.end(util.inspect({fields: fields, files: files}));
		})

		return;
	}

	var content = fs.readFileSync('./post_file.html');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(content);
}).listen(8080, function(){
	console.log('File server is started on port 8080');
});