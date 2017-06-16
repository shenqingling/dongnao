var startHandler = require('./startHandler.js');
var uploadHandler = require('./uploadHandler.js');
var showHandler = require('./showHandler.js');

var handle = {};
handle['/'] = startHandler.start;
handle['/start'] = startHandler.start;
handle['/upload'] = uploadHandler.upload;
handle['/show'] = showHandler.show;

exports.handle = handle;