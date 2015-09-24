'use strict';

var lib = require('../lib/index');

module.exports = function (grunt) {
	var DEFAULT_PORT = 8899;

	grunt.registerMultiTask('testServerRun', function () {
		var options = this.options({
			port: DEFAULT_PORT,
			serve: function (app) {}
		});

		lib.testServerRun(options.port, options.serve);
	});

	grunt.registerMultiTask('testServerClose', function () {
		var options = this.options({
			port: DEFAULT_PORT
		});

		if (!options.hasOwnProperty(options.port)) {
			return grunt.fail.fatal('test server was not ran');
		}

		lib.testServerClose(options.port);
	});

	grunt.registerTask('testServerCloseAll', lib.testServerCloseAll);
};
