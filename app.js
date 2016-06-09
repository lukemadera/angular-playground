'use strict';

angular.module('myApp', [
    'ngRoute',
    'ld.batches'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider',
 function($routeProvider, $locationProvider, $compileProvider) {
	var staticPath = '/';
	var appPathRoute = staticPath;
	var pagesPath = staticPath+'pages/';

	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
}]);