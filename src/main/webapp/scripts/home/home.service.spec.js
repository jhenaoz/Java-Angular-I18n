describe('HomeService', function(){

  beforeEach(module('viamericas'));

  var vm, scope, $httpBackend ;

  beforeEach(inject(function ($injector) {
    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    HomeService = $injector.get('HomeService');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
  })); 

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  describe('vm.requestHtml', function(){
    it('call the HomeService with requestHtml and return a promise',inject( function($q){
        translate = $httpBackend.when('GET', 'scripts/languages/home/en.home.json').respond();
        $httpBackend.flush();
        spyOn(HomeService, 'requestHtml');
        htmlSend = $httpBackend.when('GET', 'api/send/html').respond();
        HomeService.requestHtml();
        expect(HomeService.requestHtml).toHaveBeenCalled();
    }));

    it('call the HomeService with requestHtml and return a exact value',inject( function($q){
        translate = $httpBackend.when('GET', 'scripts/languages/home/en.home.json').respond();
        $httpBackend.flush();
        var dataToSend = '<html>test</html>';
        spyOn(HomeService, 'requestHtml').and.callThrough();
        htmlSend = $httpBackend.when('GET', 'api/send/html').respond(dataToSend);
        var actualResponse;
        HomeService.requestHtml().then(function(response){
    		actualResponse = response;
    	});
        $httpBackend.flush();
        expect(actualResponse.data).toBe(dataToSend);
    }));
  });


});
