var mapFeatures;

mapFeatures = {
	'all': 'all',
	'administrative':
	{
		'administrative.country': 'administrative.country',
		'administrative.land_parcel': 'administrative.land_parcel',
		'administrative.locality': 'administrative.locality',
		'administrative.neighborhood': 'administrative.neighborhood',
		'administrative.province': 'administrative.province'
	},
	'landscape':
	{
		'landscape.man_made': 'landscape.man_made',
		'landscape.natural': 
		{
			'landscape.natural.landcover': 'landscape.natural.landcover',
			'landscape.natural.terrain': 'landscape.natural.terrain'
			
		}
	},
	'water':'water',
	'road':
	{
		'road.arterial': 'road.arterial',
		'road.highway':
		{
			'road.highway.controlled_access': 'road.highway.controlled_access'
		},
		'road.local': 'road.local'
	},
	'transit':
	{
		'transit.line': 'transit.line',
		'transit.station':
		{
			'transit.station.airport':'transit.station.airport',
			'transit.station.bus': 'transit.station.bus',
			'transit.station.rail': 'transit.station.rail'
		}
	},
	'poi':
	{
		'poi.attraction': 'poi.attraction',
		'poi.business': 'poi.business',
		'poi.government': 'poi.government',
		'poi.medical': 'poi.medical',
		'poi.park': 'poi.park',
		'poi.place_of_worship': 'poi.place_of_worship',
		'poi.school': 'poi.school',
		'poi.sports_complex': 'poi.sports_complex'
	}
}


