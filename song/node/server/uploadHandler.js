var fs = require('fs');
var formidable = require('formidable');

function upload(response, request){
	if(request.method.toLowerCase() === 'get'){
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('404 NOT FOUND');
		response.end();
	}else{
		console.log('Request handler "upload" was called.');
		var form = new formidable.IncomingForm();
		// windows下fs.renameSync报错，需要加上这一句，并且要新建对应得文件夹
		// 上传的文件会默认保存在该目录下，除非使用fs.renameSync去改变了路径
		form.uploadDir = 'upload';
		form.parse(request, function(err, fields, files){
			response.writeHead(200, { 'Content-Type': 'text/html' });
			fs.renameSync(files.MyFile.path, 'tmp/pic.jpeg');
			// response.write(string or Buffer)
		    response.write('received image: <br/> ');
		    response.write('<img src="/show"/>');
		    response.end();
		});
	}
}

exports.upload = upload;
