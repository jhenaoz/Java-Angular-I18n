(function() {
    'use strict';

    angular.module('viamericas').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [ '$translate', 'HomeService' ];

    function HomeCtrl($translate, HomeService) {

        var vm = this;
        vm.changeLanguage = changeLanguage;
        vm.htmlContent = htmlContent;
        vm.content = htmlContent();
        vm.test = 'this is a test';
        
        
        /////////////////////////////////
        function htmlContent(){
        	HomeService.requestHtml()
        	.then(function(response){
        		return response.data;
        	},function(error){
        		
        	});
        }
        function changeLanguage(language) {
            $translate.use(language);
        }

    }

})();