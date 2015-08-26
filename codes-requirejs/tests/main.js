requirejs.config({
	baseUrl: "../src",

	paths: {
		"mocha": "../tests/libs/mocha",
		"chai": "../tests/libs/chai",
		"configDir": "../tests/config/",
		"configFile": "../tests/configs/config",
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

require(['configFile'], function(config) {
	var config = new config();

	require(['configDir/serve-test-files'], function() {
		config.runMocha();
	});
});