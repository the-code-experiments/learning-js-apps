requirejs.config({

    baseUrl: 'libs',

    paths: {
        'app': 'app',
        'jquery': 'jquery.min'
    }

});

require(['../app/init'], function(init) {
	var i = new init();
	i.initialize();
});