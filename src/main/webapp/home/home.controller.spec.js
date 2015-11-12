describe('HomeCtrl', function(){

  beforeEach(module('viamericas'));

  var vm, translate;

  beforeEach(inject(function ($controller) {
    translate = {
      use: function() { }
    };
    vm = $controller('HomeCtrl', {
      $translate : translate
    });
  })); 

  describe('vm.changeLanguage',function() {
    it('calls translate.use with the given parameters', function() {
      spyOn(translate,'use');
      vm.changeLanguage('es');
      expect(translate.use).toHaveBeenCalledWith('es');
    });

  });


});

