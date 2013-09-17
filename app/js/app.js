'use strict';
// Declare app level module which depends on filters, and services
/*jslint sloppy: true */
/*global angular, Firebase*/
var creditsTracking = angular.module('creditsTracking', ['firebase']);

creditsTracking.value('fbWorkshops', 'https://credits-tracking.firebaseio.com/workshops');
creditsTracking.value('fbMyWorkshops', 'https://credits-tracking.firebaseio.com/users');

creditsTracking.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/page/workshops', {templateUrl: 'partials/workshops.html', controller: 'WorkshopsCtrl'})
        .when('/page/myworkshops', {templateUrl: 'partials/myworkshops.html', controller: 'MyWorkshopsCtrl'})
        .otherwise({templateUrl: 'partials/home.html'});
}]);

/*creditsTracking.controller('CreditsTrackingCtrl', ['$scope', 'angularFireCollection', 'fbURL', function ($scope, angularFireCollection, fbURL) {
	$scope.creditsTrackingData = angularFireCollection(fbURL);
}]);*/

creditsTracking.controller('WorkshopsCtrl', ['$scope', 'angularFireCollection', 'fbWorkshops', function ($scope, angularFireCollection, fbWorkshops) {
	$scope.workshops = angularFireCollection(fbWorkshops);
}]);

creditsTracking.controller('MyWorkshopsCtrl', ['$scope', 'angularFireCollection', 'fbMyWorkshops', function ($scope, angularFireCollection, fbMyWorkshops) {
	$scope.myworkshops = angularFireCollection(fbMyWorkshops);
}]);
