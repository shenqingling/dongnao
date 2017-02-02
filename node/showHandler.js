var fs = require('fs');

function show(response){
	console.log('Request handler "show" was called.');
	fs.readFile('tmp/pic.jpeg', function(err, file){
		if(err){
			console.log(err);
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write('服务器内部错误，500');
			response.end();
		}else{
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(file, 'binary');
			response.end();
		}
	});
}

exports.show = show;
