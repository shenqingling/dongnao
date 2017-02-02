// 这里是子进程，所以才不会阻塞
var exec = require('child_process').exec;

function start(response){
	console.log('Request handler "start" was called.');
	// 会有阻塞，这里是同步的
	// function sleep(milliSeconds){
	// 	var startTime = new Date().getTime();
	// 	while(new Date().getTime() < startTime + milliSeconds){};
	// }
	// sleep(10000);

	// return 'Hello Start.';

	// 这里是异步的，所以response3句话写在回调函数中
	// 因为这里开启了子进程，所以不会阻塞
	exec('ls', function(error, stdout, stderr){
		if(error){
			console.log(error);
		}else{
			var content = stdout || stderr;
			console.log(content);
			response.writeHead(200, { 'Content-Type': 'text/plain' });
		    response.write(content);
		    response.end();
		}
	});
}

function upload(response){
	console.log('Request handler "upload" was called.');
	// return 'Hello Upload.';
	response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Upload.');
    response.end();
}

exports.start = start;
exports.upload = upload;
