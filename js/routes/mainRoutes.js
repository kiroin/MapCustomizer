define(['app', 'controllers/appcontroller'], function (app, appcontroller) {
	console.log(appcontroller);
  return app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {controller: 'appcontroller', templateUrl: 'directives/simpleTemplate.html'});
  }]);

});