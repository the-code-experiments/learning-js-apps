requirejs.config({
	baseUrl: "../src",

	paths: {
		"tests": "../tests/",
		"mocha": "../tests/libs/mocha",
		"chai": "../tests/libs/chai",
		"config": "../tests/config",
		"app": "../tests/app",
		"src": "../src/app"
	},

	shim: {
		"mocha": {
			exports: "mocha"
		},
		"chai": {
			exports: "chai"
		}
	}
});

require(['config'], function(config) {
	var config = new config();

	require(['tests/serve-test-files'], function() {
		config.runMocha();
	});
});