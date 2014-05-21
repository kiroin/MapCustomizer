
// define(['jquery', 'app'], function($, app) {
// 	console.log(app);
//     // Some set up 
//     // code here

//     // Return module with methods
//     return {
//         bar: function() {
//         		console.log("hiya");
//         }
//     }


// });


define (['app'], function (app) {
	//console.log(app);
	return app.controller('appcontroller', []);
	// var controller = angular.module('appcontroller', ['$scope', function ($scope) {

	// 	$scope.key = "hey!";
	// }]);
	// return this.controller;
	// var MapCanvas = app.controller('MapCanvas', ['$scope', function ($scope) {

	// }]);
});

// mapCustomizerApp.controller( 'FeatureTitleBar', ['$scope', 'panelControls',
// 		function($scope, panelControls) {
// 			this.thing = "hi";
// 			//this.stuff = panelControls.query();
// 	}]);

// mapCustomizerApp.controller( 'FeaturePanel', ['$rootScope', '$scope', '$http', 'panelControls',
// 		function($rootScope, $scope, $http, panelControls) {
// 			var _self = this;
// 			var _scope = $scope;
// 			// $rootScope.map.styles;
// 			$scope.setStyle = function (){
// 				//console.log(_self);
// 				var map = $rootScope.map;
// 				// properties don't show up until checked...

// 				// var featureType = panel.property;
// 				// var checkbox = panel.visible;
// 				// var visibility = "";
// 				// if styles array isn't defined, define it
// 				if(!map.hasOwnProperty('styles')){
// 					console.log("styles");
// 					map.styles = [];

// 				}
// 				// var open  = {};
// 				var styles = map.styles;

// 				for (var i=0; i<_self.mapdata.length; i++){
// 					var feature = _self.mapdata[i];
// 					var label = _self.mapdata[i].property;
// 					console.log("--- "+label);

					
// 					// if feature styling doesn't exist, add it.
// 					if(styles[i] === undefined) {
// 						styles[i] = {featureType: label, stylers: []};
// 					}
					
// 					// geometry 
// 					if(feature.hasOwnProperty('geometry')){
// 						console.log(styles[i]);

// 						// does this have feature? if(featureType)
// 						styles[i] = {featureType: label, stylers: []};

// 						if (feature.geometry.hasOwnProperty('visible')){

// 							console.log("thing visible: " + !feature.geometry.visible);
// 							var visibility = { visibility : _self.fn._visibilityCheck(feature.geometry.visible)};
							
// 							styles[i].stylers.push( visibility);
// 							console.log("styles:" + styles);
// 							console.log(visibility);
// 						}

// 					}
// 				}


// 				// if(checkbox == true){
// 				// 	visibility = "on";
// 				// } else {
// 				// 	visibility = "off";
// 				// }
// 				// // console.log(featureType + ", " + visibility);
// 				// var styles = [{
// 				// 	featureType:  featureType,
// 				// 	stylers: [
// 				// 		{ visibility: visibility }
// 				// 	]
// 				// }];

// 				console.log(styles);
// 				map.setOptions({styles: styles});
// 			}
// 			_self.fn = {
// 				_visibilityCheck: function(input){
// 					if(input != true){
// 						return "on";
// 					}
// 					else {
// 						return "off";
// 					}
// 				},
// 				_clickedPanel: function(title){
// 					// remove?
// 					if(_self.openedPanelTitle === undefined){
// 						_self.openedPanelTitle = title;
// 					} else {
// 						_self.openedPanelTitle = undefined;
// 					}
// 				},

// 				_findOpenPanel: function (feature) {
// 					// remove?
// 					if(feature.nodes){
// 						console.log(feature.name + " has nodes");
// 						for (var i=0; i< feature.length; i++){
// 							_self.fn._findOpenPanel(feature.nodes[i]);
// 						}
// 					}
// 					else if(feature.isOpen === true){
// 						console.log(feature)
// 						return feature;
// 					}
// 				},
				
// 				_ispanelopen: function(){
// 					// remove?
// 					return false;
// 				},

// 				_openPanel: function(){
// 					// remove? or fix to filtering fcn?	
// 					var open  = {};
// 					for (var i=0; i< _self.mapdata.length; i++){
// 						console.log("checking" + _self.mapdata[i]);
// 						open = _self.fn._findOpenPanel(_self.mapdata[i]);
// 					}
// 					// console.log("opening: "+ open.label);
// 					return open;
// 				},

// 				init: function(){
// 					_self.mapdata = panelControls.query();
					
// 				}

// 			}

// 			_self.fn.init();


// 	}]);




// mapCustomizerApp.controller('MapCanvas', ['$rootScope', '$scope', 'panelControls', 'propertyList',
// 	function ($rootScope, $scope, panelControls, propertyList) {
// 		var _self = this,
// 			_defaultMapId = "default",
// 			_defaultMapType = new google.maps.StyledMapType([], {name:'Base'}),
// 			_customMapId = "customMapID",
// 			thing = "";

// 		/*
// 		 $rootScope.map
// 			defaultMapOptions // object // contains default map options
// 			init // function // initializes $rootscrop.map.gMap

// 		*/

// 		$rootScope.map = {

// 			defaultMapOptions: {
// 				zoom: 8,
// 				center: new google.maps.LatLng(-34.397, 150.644),
// 				mapTypeControl: true,
// 				mapTypeId: google.maps.MapTypeId.ROADMAP,
// 				mapTypeControlOptions: {
// 					style: google.maps.MapTypeControlStyle.DEFAULT,
// 					position: google.maps.ControlPosition.RIGHT_TOP,
// 					// set to default
// 					mapTypeIds: [_defaultMapId]
// 				},
// 				overviewMapControlOptions: {
// 					opened: true	
// 				},
// 				panControl: true,
// 				panControlOptions: {
// 					position: google.maps.ControlPosition.RIGHT_CENTER
// 				},
// 				zoomControl: true,
// 				zoomControlOptions: {
// 					position: google.maps.ControlPosition.RIGHT_CENTER
// 				},
// 				streetViewControl: true,
// 				streetViewControlOptions: {
// 					position: google.maps.ControlPosition.RIGHT_CENTER
// 				},
// 				scaleControl: true,
// 				scaleControlOptions: {
// 					position: google.maps.ControlPosition.BOTTOM_RIGHT
// 				}
// 			},

// 			// intialize map
// 			init: function (){

// 				// create our map on the dom using defaultMapOptions
// 				var _gMap = new google.maps.Map(document.getElementById('map-canvas'), _self.defaultMapOptions);

// 				// set the id and type
// 				_gMap.mapTypes.set(_defaultMapId, _defaultMapType);
// 				$rootScope.map.gMap = _gMap;

// 				// get initial featureList
// 				$rootScope.map.featureList = panelControls.query();
// 				$rootScope.map.propertyList = propertyList.query();
// 				console.log($rootScope.map.featureList);


// 				// recursively set styleList. This adds properties to each feature.
				
// 				var _featureList = $rootScope.map.featureList;
// 				var _propertyList = $rootScope.map.propertyList;
// 				var _styleList = _featureList;

// 				function setStyle (_styleList){
// 					_styleList.styles = _propertyList;
// 					if(_styleList.hasOwnProperty("nodes")) {
// 						setStyle(_styleList.nodes);
// 					}
// 				}
// 				setStyle(_styleList);
// 				console.log(_styleList);
// 			},


// 			// set red map
// 			redmap: function() {
// 				// set up our default map options
// 			} 

// 		};
// 		google.maps.event.addDomListener(window, 'load', $rootScope.map.init);

// 		return $rootScope;

// }]);


