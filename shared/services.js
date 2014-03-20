mapCustomizerApp.factory ('panelControls', ['$resource', function($resource) {
	// a service is a data model passed between controllers

	// var fn = {
	// 	_getData: function (){
	// 		return mapFeatures._data;
	// 	}
	// }
	// var defer = $q.defer();

	// var mapFeatures = {
	// 	getMapFeatures: function (){
			
	// 		$http.get('data/mapFeatures-array.json')
	// 	  		.success( function(data, status, headers, config){
	// 	  			mapFeatures._data = data;
	// 	  			defer.resolve(data);
	// 	  		})
	// 	  		.error( function(data, status, headers, config) {
	// 				// called asynchronously if an error occurs
	// 				// or server returns response with an error status.
	// 				console.log(headers);
	// 		});
	// 	 	return defer.promise;
	// 		// if(true){
	// 		// 	_data = {roses:"red"};
	// 		// 	return fn._getData();
	// 		// }
			
	// 		//return _data;
	// 	},
	// 	_data: {roses:"red"}
	// }
	// // return functions to CRUD features
	// return mapFeatures;




//  this.get = function(from, to) {
//   return $http.get('data/mapFeatures-array.json')
// 	  .then(function(response) {
// 	    //do things with data
// 	    return response.data;
// 	  }, function(error) {
// 	    //do things with error
// 	    return "IT MESSED UP, YO";
// 	  });
// };

return $resource('data/mapFeatures-array.json');


}]);
