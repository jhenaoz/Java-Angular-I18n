describe('HomeCtrl', function(){

  beforeEach(module('viamericas'));

  var vm, translate, HomeServiceMock, scope, $httpBackend ;

  beforeEach(inject(function ($injector) {
    $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();

    translate = {
      use: function() { }
    };
    HomeServiceMock = {
      requestHtml : function() {
        return $q.defer().promise
      }
    };
    vm = $controller('HomeCtrl', {
        $scope : scope,
        $translate : translate,
        HomeService : HomeServiceMock
    });
  })); 

  describe('vm.changeLanguage',function() {
    it('calls translate.use with the given parameters', function() {
      spyOn(translate,'use');
      vm.changeLanguage('es');
      expect(translate.use).toHaveBeenCalledWith('es');
    });
  });

  describe('vm.htmlContent', function(){
    it('call the HomeService and return a promise',
      inject( function($q){
          var response = $q.defer();
          spyOn(HomeServiceMock, 'requestHtml').and.returnValue(response.promise);
          vm.htmlContent();
          expect(HomeServiceMock.requestHtml).toHaveBeenCalled();
        }
      )
    );
    it('call the HomeService and check the response in the scope model',inject( function($q){
        translate = $httpBackend.when('GET', 'scripts/languages/home/en.home.json').respond();
        $httpBackend.flush();
        var htmlResponse = {data:'<p>i am the response</p>'};
        var response = $q.defer();
        spyOn(HomeServiceMock, 'requestHtml').and.returnValue(response.promise);
        vm.htmlContent();
        response.resolve(htmlResponse);
        scope.$apply();
        expect(vm.content).toBe(htmlResponse.data);
    }));
  });


});

