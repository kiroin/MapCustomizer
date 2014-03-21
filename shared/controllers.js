
mapCustomizerApp.controller( 'FeatureTitleBar', ['$scope', 'panelControls',
		function($scope, panelControls) {
			this.thing = "hi";
			//this.stuff = panelControls.query();
	}]);

mapCustomizerApp.controller( 'FeaturePanel', ['$scope', '$http', 'panelControls',
		function($scope, $http, panelControls) {
			var _self = this;

			
			this.mapdata = {
			// 	road: "black",
			// 	water: "blue",
			// 	cities: "big"
			};

			
			_self.fn = {
				_clickedPanel: function(title){
					if(_self.openedPanelTitle === undefined){
						_self.openedPanelTitle = title;
					} else {
						_self.openedPanelTitle = undefined;
					}
				},
				_findOpenPanel: function (feature) {
				
					if(feature.nodes){
						console.log(feature.name + " has nodes");
						for (var i=0; i< feature.length; i++){
							_self.fn._findOpenPanel(feature.nodes[i]);
						}
					}
					else if(feature.isOpen === true){
						console.log(feature)
						return feature;
					}
				},
				
				_ispanelopen: function(){
					return false;
				},

				_openPanel: function(){
					var open  = {};
					for (var i=0; i< _self.mapdata.length; i++){
						console.log("checking" + _self.mapdata[i]);
						open = _self.fn._findOpenPanel(_self.mapdata[i]);
					}
					console.log("opening: "+ open.label);
					return open;
				},

				init: function(){
					_self.mapdata = panelControls.query();
					
				}

			}

			_self.fn.init();
			_self.panelTitle = _self.fn._openPanel();


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