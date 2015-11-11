(function() {
    'use strict';

    angular.module('viamericas').config(TransalationConfig);

    TransalationConfig.$inject = [ '$translateProvider' ];

    function TransalationConfig($translateProvider) {

        var vm = this;

        $translateProvider.preferredLanguage('en');

        $translateProvider.useStaticFilesLoader({
            prefix : '/languages/',
            suffix : '.index.json'
        });

        $translateProvider.useStaticFilesLoader({
            prefix : '/languages/home/',
            suffix : '.home.json'
        });

    }

})();