(function() {
    'use strict';

    angular.module('viamericas').service('HomeService', HomeService);

    HomeService.$inject = [ '$http' ];

    function HomeService($http) {

        var vm = this;
        vm.requestHtml = requestHtml;
        
        function requestHtml() {
            return $http.get('api/send/html');
        };

    }

})();