angular.module('viamericas').config(
		function($stateProvider, $locationProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider.state('home', {
				url : '/',
				templateUrl : 'scripts/home/home.html',
				controller : 'HomeCtrl'

			});

		});