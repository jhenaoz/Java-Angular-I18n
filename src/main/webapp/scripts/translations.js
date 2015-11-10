angular.module('viamericas').config(function($translateProvider) {

	$translateProvider.preferredLanguage('en');

	$translateProvider.useStaticFilesLoader({
		prefix : '/languages/',
		suffix : '.index.json'
	});

	$translateProvider.useStaticFilesLoader({
		prefix : '/languages/home/',
		suffix : '.home.json'
	});

});