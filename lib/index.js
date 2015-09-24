'use strict';

var express = require('express');
var servers = {};

var testServerRun = function (port, serve) {
	var app = express();

	serve(app, express);

	var server = app.listen(port);

	if (servers.hasOwnProperty(port)) {
		throw new Error('test server ' + port + ' has already run');
	}

	servers[port] = server;

	return server;
};

var testServerClose = function (port) {
	if (!servers.hasOwnProperty(port)) {
		return;
	}

	servers[port].close();

	delete servers[port];
};

var testServerCloseAll = function () {
	for (var port in servers) {
		if (servers.hasOwnProperty(port)) {
			testServerClose(port);
		}
	}
};

exports.testServerRun = testServerRun;
exports.testServerClose = testServerClose;
exports.testServerCloseAll = testServerCloseAll;
