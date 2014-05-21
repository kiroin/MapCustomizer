mapCustomizerApp.factory ('panelControls', ['$resource', function($resource) {
	// a service is a data model passed between controllers
	return $resource('data/mapFeatures-array.json');
}]);
mapCustomizerApp.factory ('propertyList', ['$resource', function($resource) {
	// a service is a data model passed between controllers
	return $resource('data/propertyList.json');
}]);
