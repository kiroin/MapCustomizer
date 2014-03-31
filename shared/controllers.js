
mapCustomizerApp.controller( 'FeatureTitleBar', ['$scope', 'panelControls',
		function($scope, panelControls) {
			this.thing = "hi";
			//this.stuff = panelControls.query();
	}]);

mapCustomizerApp.controller( 'FeaturePanel', ['$rootScope', '$scope', '$http', 'panelControls',
		function($rootScope, $scope, $http, panelControls) {
			var _self = this;
			var _scope = $scope;
			// $rootScope.map.styles;
			$scope.setStyle = function (){
				//console.log(_self);
				var map = $rootScope.map;
				// properties don't show up until checked...

				// var featureType = panel.property;
				// var checkbox = panel.visible;
				// var visibility = "";
				// if styles array isn't defined, define it
				if(!map.hasOwnProperty('styles')){
					console.log("styles");
					map.styles = [];

				}
				// var open  = {};
				var styles = map.styles;

				for (var i=0; i<_self.mapdata.length; i++){
					var feature = _self.mapdata[i];
					var label = _self.mapdata[i].property;
					console.log("--- "+label);

					
					// if feature styling doesn't exist, add it.
					if(styles[i] === undefined) {
						styles[i] = {featureType: label, stylers: []};
					}
					
					// geometry 
					if(feature.hasOwnProperty('geometry')){
						console.log(styles[i]);

						// does this have feature? if(featureType)
						styles[i] = {featureType: label, stylers: []};

						if (feature.geometry.hasOwnProperty('visible')){

							console.log("thing visible: " + !feature.geometry.visible);
							var visibility = { visibility : _self.fn._visibilityCheck(feature.geometry.visible)};
							
							styles[i].stylers.push( visibility);
							console.log("styles:" + styles);
							console.log(visibility);
						}

					}
				}


				// if(checkbox == true){
				// 	visibility = "on";
				// } else {
				// 	visibility = "off";
				// }
				// // console.log(featureType + ", " + visibility);
				// var styles = [{
				// 	featureType:  featureType,
				// 	stylers: [
				// 		{ visibility: visibility }
				// 	]
				// }];

				console.log(styles);
				map.setOptions({styles: styles});
			}
			_self.fn = {
				_visibilityCheck: function(input){
					if(input != true){
						return "on";
					}
					else {
						return "off";
					}
				},
				_clickedPanel: function(title){
					// remove?
					if(_self.openedPanelTitle === undefined){
						_self.openedPanelTitle = title;
					} else {
						_self.openedPanelTitle = undefined;
					}
				},

				_findOpenPanel: function (feature) {
					// remove?
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
					// remove?
					return false;
				},

				_openPanel: function(){
					// remove? or fix to filtering fcn?	
					var open  = {};
					for (var i=0; i< _self.mapdata.length; i++){
						console.log("checking" + _self.mapdata[i]);
						open = _self.fn._findOpenPanel(_self.mapdata[i]);
					}
					// console.log("opening: "+ open.label);
					return open;
				},

				init: function(){
					_self.mapdata = panelControls.query();
					
				}

			}

			_self.fn.init();


	}]);




mapCustomizerApp.controller('MapCanvas', ['$rootScope', '$scope',
	function ($rootScope, $scope) {
		var _defaultMapId = "default",
			_defaultMapType = new google.maps.StyledMapType([], {name:'Base'}),
			_customMapId = "customMapID",
			thing = "";
		$rootScope.map = {

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
				
				var _self = $rootScope.map;
				// console.log(_self.defaultMapOptions);
				thing = new google.maps.Map(document.getElementById('map-canvas'), _self.defaultMapOptions);
				// set the id and type
				thing.mapTypes.set(_defaultMapId, _defaultMapType);
				//console.log(thing);
				$rootScope.map = thing;
			},
			// set red map
			redmap: function() {
				// set up our default map options
			} 

		};
		google.maps.event.addDomListener(window, 'load', $rootScope.map.init);

		return $rootScope;

}]);


