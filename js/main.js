require.config({
    //By default load any main.js from js
    baseUrl: 'js',
    paths: {
    	jquery: 'libraries/jquery/jquery-1.11.0.min',
        angular: 'libraries/angular/angular',
        ngResource: 'libraries/angular/angular-resource',
        ngRoute: 'libraries/angular/angular-route.min',
        services: 'services/services'

    },

	shim: {
		'angular' : {
            exports: 'angular'
        },
		'ngResource': { 
            deps:['angular']
        },
		'jQuery': {
            exports: 'jQuery'
        }
	}

});

// Start the main app logic.
require (['angular', 'routes/mainRoutes', 'app'], function (angular, mainRoutes, app) {
    app.init();
});



//     <!-- angular js -->
//     <script type="text/javascript" src="libraries/angular/angular.js"></script>
//     <script type="text/javascript" src="libraries/angular/angular-resource.js"></script>
//     <!-- <script type="text/javascript" src="libraries/angular/angular.min.js"></script> -->
    
//     <!-- bootstrap -->
    
//     <link rel="stylesheet" type="text/css" href="libraries/bootstrap/css/bootstrap.css">
//     <!-- ui bootstrap -->
//     <script type="text/javascript" src="libraries/ui-bootstrap/ui-bootstrap-tpls-0.10.0.js"></script>
// <!--    <script type="text/javascript" src="libraries/ui-bootstrap/ui-bootstrap-0.10.0.min.js"></script> -->

//     <!-- Google maps api -->
//     <script type="text/javascript" 
//         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9dWUuIWs1AaO_frUNzqGo7pRGtQW-Jug&libraries=places&sensor=false"
//     ></script>


//     <!-- jquery -->
//     <script type="text/javascript"
//         src="libraries/jquery/jquery-1.11.0.min.js"
//     ></script>
//     <script type="text/javascript" src="libraries/jquery.ui/jquery-ui.min.js"></script>
    
//     <!-- stylesheets -->
//     <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/themes/dot-luv/jquery-ui.min.css">
    
//     <!-- app -->
//     <script type="text/javascript" src="app.js"></script>
// <script type="text/javascript" src="shared/services.js"></script>
//     <script type="text/javascript" src="shared/controllers.js"></script>

//     <!-- map features -->
//     <!--<script type="text/javascript" src="shared/custommap.js"></script>-->