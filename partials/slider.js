$(function() {
	// creates a slider for each map attribute
	$( ".slider" ).slider({
		min: -100, 
		max: 100, 
		value: 0, 
		slide: function( event, ui ) {
			var val = ui.value;
			var styler, feature;
			var styles;
			//console.log('#' + event.target.id + '-label, val=' + val);
			
			//console.log(event.target.getAttribute('styler'));
			styler = event.target.getAttribute('styler');
			
			//console.log(event.target.getAttribute('feature'));
			feature = event.target.getAttribute('feature');
								
			var temp = {};
			temp[styler] = val;
			
			styles = [{
				featureType: feature,
				stylers: [ temp ]
			}];
			// console.log(styles);
			map.setOptions({'styles': styles });
			
			// console.log('#' + feature+'-'+styler + '-label, val=' + val);
			$('#' + feature+'-'+styler + '-label').text( val );

		}
	});
	
	
});