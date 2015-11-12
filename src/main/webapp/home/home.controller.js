(function() {
    'use strict';

    angular.module('viamericas').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [ '$translate' ];

    function HomeCtrl($translate) {

        var vm = this;
        vm.changeLanguage = changeLanguage;

        function changeLanguage(language) {
            $translate.use(language);
        };

    }

})();