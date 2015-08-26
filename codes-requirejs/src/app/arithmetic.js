define([], function() {

	'use strict';
	
	var arithmetic = function() {

		this.add = function(a, b) {
			console.log("Log: Addition: ", a + b);
			return a + b;
		}

	};

	return arithmetic;

});