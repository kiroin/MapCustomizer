mapCustomizerApp.factory ('panelControls', ['$resource', function($resource) {
	// a service is a data model passed between controllers

return $resource('data/mapFeatures-array.json');


}]);
