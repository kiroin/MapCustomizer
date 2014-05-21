requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'libraries',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
    	jquery: 'jquery/jquery-1.11.0.min',
        angular: 'angular/angular',
        angularResource: 'angular/angular-resource',
        services: '../shared/services',
        controllers: '../shared/controllers'

    },

	shim: {
		'angular' : {'exports' : 'angular'},
		'angular-resource': { deps:['angular']},
		'angular-route': { deps: ['angular']},
		'jQuery': {'exports' : 'jQuery'}
	}

});

// Start the main app logic.
require([
	'jquery', 
	'angularResource', 
	'angular'
], function ($, angularResource, angular) {

	$(function () { // using jQuery because it will run this even if DOM load already happened
	    angular.bootstrap(document, ['mapCustomizer']);
	  });


});

