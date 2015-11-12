(function() {
    'use strict';

    angular.module('viamericas').config(TransalationConfig);

    TransalationConfig.$inject = [ '$translateProvider' ];

    function TransalationConfig($translateProvider) {

        var vm = this;

        $translateProvider.preferredLanguage('en');

        $translateProvider.useStaticFilesLoader({
            prefix : 'scripts/languages/',
            suffix : '.index.json'
        });

        $translateProvider.useStaticFilesLoader({
            prefix : 'scripts/languages/home/',
            suffix : '.home.json'
        });

    }

})();