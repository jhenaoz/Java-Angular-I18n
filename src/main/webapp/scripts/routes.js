(function() {
    'use strict';

    angular.module('viamericas').config(RoutesConfig);

    RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        var vm = this;

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url : '/',
            templateUrl : 'scripts/home/home.html',
            controller : 'HomeCtrl',
            controllerAs : 'home'
        });

    }

})();