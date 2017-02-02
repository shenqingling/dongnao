// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
// 	console.log(req.url);
// 	console.log(req.headers);
// 	// fs.appendFileSync('request.json', JSON.stringify(req));
// 	res.writeHeader(200, {'Content-Type': 'text/plain'});
// 	res.write('Hello world!');
// 	res.end();
// }).listen(80,function(){
// 	console.log('Server is starting on port 80');
// });

var server = require('./server.js');
// 依赖注入：通过require依赖，注入为方法的参数（router.route）中去
// 依赖注入是拆分代码的一种方式
var router = require('./router.js');
// var requestHandlers = require('./requestHandlers.js');
// var requestHandlers = require('./postHandler.js');
var requestHandlers = require('./requestHandler.js');


server.start(router.route, requestHandlers.handle);






















