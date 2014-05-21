
define(['angular', 'ngResource', 'ngRoute'], function (angular, ngResource, ngRoute) {

	var app = angular.module('app', ['ngResource', 'ngRoute']);
	app.init = function () {
		angular.bootstrap(document, ['app']);
	};

	return app
});
// 	// app.init = function () {
// 	// 	angular.bootstrap(document, ['likeastore']);
// 	// };

