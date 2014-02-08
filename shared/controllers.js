mapCustomizerApp.controller( 
	'FeaturePanel', [
		function() {
				this.panelTitle = "Map attributes";
				this.mapdata = {
					road: "black",
					water: "blue",
					cities: "big"
				};
		}
	]
);