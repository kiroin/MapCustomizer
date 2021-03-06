var map;
var lala;
		
function initialize() {

	var mapOptions;
	
	var featureOpts;
	var styledMapOptions;  // sets name to appear in box switch
	var customMapID; // sets id to register with mapTypeIDs array.
	var customMapType; // a map Class to apply to our map: takes in features(like colors) and options(like names)

	
	var defaultMapID = "default"; // id to register to the mapTypeIDs array. will set to default
	var defaultMapType;

	
	// set up our default map options
	mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		mapTypeControl: true,
		mapTypeId: customMapID,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DEFAULT,
			position: google.maps.ControlPosition.RIGHT_TOP,
			// set to default
			mapTypeIds: [defaultMapID]
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
	};
	
	// create our map
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	defaultMapType = new google.maps.StyledMapType([], {name:'Base'});
	map.mapTypes.set(defaultMapID, defaultMapType);
	
	// set up our custom feature options
	featureOpts = [
		{
		  stylers: [
		    { hue: '#890000' },
		    { visibility: 'simplified' },
		    { gamma: 0.5 },
		    { weight: 0.5 }
		  ]
		},
		{
		  elementType: 'labels',
		  stylers: [
		    { visibility: 'off' }
		  ]
		},
		{
		  featureType: 'water',
		  stylers: [
		    { color: '#890000' }
		  ]
		}
	];
	
	customMapID = "customMapID";
	
	// set up our default styled map options
	styledMapOptions = {
		name: 'Redworld'
	};

	// create a map type using our features and map options
	customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	
	// set our map to use our new map type	
	map.mapTypeControlOptions.mapTypeIds.push(customMapID);
	map.mapTypes.set(customMapID, customMapType);


	// Recursive Print html of map features
	
	function mapFeature(inFeatures){
		var htmlString = "\n";
		var i =0;
		for (var index in inFeatures){
			i++;
			var features = inFeatures[index];
						
			if (typeof features === 'string'){
				htmlString += '<h3 class="headline">' + features + '</h3>';
				htmlString+= '<div class="content">';
				//htmlString += addSliderHml(features);
				htmlString += addSliderHml(features);
				htmlString += '</div>';
			}
			else{
				// get title
				htmlString += '<h3 class="headline">' + index + '</h3>';
				htmlString += '<div class="content">\n';
					htmlString += addSliderHml(index);
					htmlString += '<div class="accordian">\n' + mapFeature(features) + '</div>';
				htmlString+= '</div>\n';
			}
		}
		htmlString +="";
		return htmlString;
	}
	function addSliderHml(feature){
		var htmlString = "\n";
		// <div feature="road" styler="saturation" class="slider"></div>
		//<span>Saturation: </span> <span id="road-saturation-label" class="feature-label">0</span>
		htmlString += '<div class="settings">\n';
			htmlString += '<h4>' + feature + '</h4> \n';
			
			htmlString += '<div class="feature-tabs"><ul>\n';
			htmlString += '<li><a href="#feature-label">Label</a></li>\n';
			htmlString += '<li><a href="#feature-outline">outline</a></li>\n';
			htmlString += '<li><a href="#feature-fill">fill</a></li>\n';
			htmlString += '</ul>\n';
			htmlString += '<div id="feature-label">dadadad</div><div id="feature-outline">ouou</div><div id="feature-fill">fififdad</div></div>\n';
			
			
			
			htmlString += '<span>Saturation</span> <span id="' + feature + '-saturation-label" class="feature-label">0</span>\n';
			htmlString += '<div feature="' + feature + '" styler="saturation" class="slider"></div>\n';
			
			htmlString += '<span>Saturation</span> <span id="' + feature + '-saturation-label" class="feature-label">0</span>\n';
			htmlString += '<div feature="' + feature + '" styler="saturation" class="slider"></div>\n';
			
			htmlString += '<span>Saturation</span> <span id="' + feature + '-saturation-label" class="feature-label">0</span>\n';
			htmlString += '<div feature="' + feature + '" styler="saturation" class="slider"></div>\n';
		htmlString += '</div>\n';
		return htmlString;
	}

	// bind the 'contentChanged event to the accordian action
	$('.controls').bind('contentChanged', function() {
		$( ".accordian" ).accordion({
			collapsible: true, 
			'heightStyle':'content', 
			active: false, 
			activate: toggleSettings
		});	
		$( ".slider" ).slider();
		$( ".feature-tabs" ).tabs({
			collapsible: true
		   });
	});

	$('#accordian').html('<div class="accordian">'+ mapFeature(mapFeatures) + '</div>');
	$('.controls').trigger('contentChanged')
	
}
	
google.maps.event.addDomListener(window, 'load', initialize);

function toggleSettings(event, ui){
			
	// opening
	if(ui.newPanel.length !== 0){
		ui.newPanel.fadeIn(300);
		ui.newPanel.parent('.accordian').parents('.content').children('.settings').fadeOut();
	}else{
		ui.oldPanel.fadeOut(300);
		ui.oldPanel.parent().parent('.content').children('.settings').fadeIn(300);
	}

}
