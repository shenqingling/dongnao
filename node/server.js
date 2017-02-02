var http = require('http');
var url = require('url');

// 这里的route是通过依赖注入所注入的
function start(route, handle) {
    http.createServer(function(request, response) {
    	var pathname = url.parse(request.url).pathname;
    	console.log('Request for ' + pathname + ' received.');

    	// request
    	// 用于post请求例子 postHandler.js
    	// var postData = '';
    	// request.setEncoding('utf8');
    	// request.addListener('data', function(postDataChunk){
    	// 	// called when a new chunk of data was received
    	// 	postData += postDataChunk;
    	// 	console.log('Receive POST data chunk ' + postDataChunk);
    	// });
    	// request.addListener('end', function(){
    	// 	// called when all chunks of data have benn received
    	// 	route(handle, pathname, response, postData);
    	// });
    	
    	// 用于文件上传例子 formidable_upload.js
		route(handle, pathname, response, request);


    	// reaponse
    	// 这里的route是通过依赖注入所注入的
    	// var content = route(handle, pathname, response);
        // response.writeHead(200, { 'Content-Type': 'text/plain' });
        // response.write(content);
        // response.end();
    }).listen(8080, function() {
        console.log('Server is starting on port 8080.');
    });
}

exports.start = start;
