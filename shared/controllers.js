
mapCustomizerApp.controller( 'FeatureTitleBar', ['$scope', 'panelControls',
		function($scope, panelControls) {
			this.thing = "hi";
			// this.mapFeatures = panelControls.getMapFeatures();
			// console.log(panelControls._data);
			//this.stuff="haha";
			
			// var promise = panelControls.get();
			// promise.then(
			// 	function (panelControls){
			// 		this.stuff = panelControls;
			// 		console.log(this.stuff);
			// 	}, function(reason){
			// 		alert("failed " + reason);
			// 	});
			// console.log(this.stuff);
			this.stuff = panelControls.query();
	}]);

mapCustomizerApp.controller( 'FeaturePanel', ['$scope', '$http',
		function($scope, $http) {
			this.panelTitle = "Map attributes";
			this.mapdata = {
			// 	road: "black",
			// 	water: "blue",
			// 	cities: "big"
			};
			var _self = this;

			function _successCallback(data, status, headers, config) {
				_self.mapdata = data;
			}


			function _findOpenPanel (feature) {
				
				if(feature.nodes){
					for (var i=0; i< feature.length; i++){
							_findOpenPanel(feature.nodes[i]);
						}
				}
				else if(feature.isOpen === true){
					console.log(feature)
					return feature;
				}

			}
			this.ispanelopen = function(){
				return false;
			}
			function init(){
				$http({method: 'GET', url: 'data/mapFeatures-array.json'}).
			  		success( _successCallback ).
			  		error(function(data, status, headers, config) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
						console.log(headers);
				});

				_self.openPanel = function(){
					// _self.mapdata
					var open  = {};
					for (var i=0; i< _self.mapdata.length; i++){
						open = _findOpenPanel(_self.mapdata[i]);
					}
					//console.log("opening: "+ open.label);
					return open;
				}
			}

			init();

	}]);




mapCustomizerApp.controller(
	'MapCanvas', 
	[	'$scope',
		function ($scope) {
			var _defaultMapId = "default",
				_defaultMapType = new google.maps.StyledMapType([], {name:'Base'}),
				_customMapId = "customMapID",
				thing = "";
			$scope.map = {

				defaultMapOptions: {
					zoom: 8,
					center: new google.maps.LatLng(-34.397, 150.644),
					mapTypeControl: true,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.DEFAULT,
						position: google.maps.ControlPosition.RIGHT_TOP,
						// set to default
						mapTypeIds: [_defaultMapId]
					},
					overviewMapControlOptions: {
						opened: true	
					},
					panControl: true,
					panControlOptions: {
						position: google.maps.ControlPosition.RIGHT_CENTER
					},
					zoomControl: true,
					zoomControlOptions: {
						position: google.maps.ControlPosition.RIGHT_CENTER
					},
					streetViewControl: true,
					streetViewControlOptions: {
						position: google.maps.ControlPosition.RIGHT_CENTER
					},
					scaleControl: true,
					scaleControlOptions: {
						position: google.maps.ControlPosition.BOTTOM_RIGHT
					}
				},
				// intialize
				init: function (){
					// create our map on the dom using defaultMapOptions
					
					var _self = $scope.map;
					console.log(_self.defaultMapOptions);
					thing = new google.maps.Map(document.getElementById('map-canvas'), _self.defaultMapOptions);
					// set the id and type
					thing.mapTypes.set(_defaultMapId, _defaultMapType);
					//console.log(thing);
				},
				// set red map
				redmap: function() {

					// set up our default map options
					

				} 

			};
			google.maps.event.addDomListener(window, 'load', $scope.map.init);
		
		}
	]
);