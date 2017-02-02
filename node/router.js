function route(handle, pathname, response, postData){
	console.log('About to route a request for ' + pathname);
	if(typeof handle[pathname] === 'function'){
		// return handle[pathname](response);
		handle[pathname](response, postData);
	}else{
		console.log('No request handle found for ' + pathname);
		// return '404 NOT FOUND';
		response.writeHead(404, { 'Content-Type': 'text/plain' });
	    response.write('404 NOT FOUND');
	    response.end();
	}
}

exports.route = route;