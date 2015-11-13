(function() {
    'use strict';

    angular.module('viamericas').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [ '$translate', 'HomeService' ];

    function HomeCtrl($translate, HomeService) {

        var vm = this;
        vm.changeLanguage = changeLanguage;
        vm.htmlContent = htmlContent;
        vm.content = '';
        vm.test = 'this is a test';
        
        htmlContent();
        /////////////////////////////////
        function htmlContent(){
        	HomeService.requestHtml()
        	.then(function(response){
        		vm.content = response.data;
        	},function(error){
        		
        	});
        }
        function changeLanguage(language) {
            $translate.use(language);
        }

    }

})();