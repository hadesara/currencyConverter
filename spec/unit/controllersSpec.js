describe('indexCtrl', function() {
    var $scope, $location, $rootScope, createController;

    beforeEach(inject(function($injector) {
        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('indexCtrl', {
                '$scope': $scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        $location.path('/about');
        expect($location.path()).toBe('/about');
        expect($scope.isActive('/about')).toBe(true);
        expect($scope.isActive('/contact')).toBe(false);
    });
});



// 'use strict';

// /* jasmine specs for controllers go here */
// describe('Index controller', function() {

//   beforeEach(function(){
//     this.addMatchers({
//       toEqualData: function(expected) {
//         return angular.equals(this.actual, expected);
//       }
//     });
//   });

//   beforeEach(module('bamn'));
//   // beforeEach(module('phonecatServices'));

//   describe('indexCtrl', function(){
//     var scope, ctrl, $httpBackend;

//     beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('/api/convert/').
//           respond(60.21465);

//       scope = $rootScope.$new();
//       ctrl = $controller('PhoneListCtrl', {$scope: scope});
//     }));


//     it('should get the value of the dollar', function() {
//       var cur = {};
//       cur['value'] = 1;
//       ctrl.convert(cur);
//       expect(scope.convertedValue).toBe(60.21465);


//     //   expect(scope.convert).toEqualData([]);
//     //   $httpBackend.flush();

//     //   expect(scope.convert).toEqualData(
//     //       [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//     // });


//     // it('should set the default value of orderProp model', function() {
//     //   expect(scope.orderProp).toBe('age');
//     // });
//   });


//   // describe('PhoneDetailCtrl', function(){
//   //   var scope, $httpBackend, ctrl,
//   //       xyzPhoneData = function() {
//   //         return {
//   //           name: 'phone xyz',
//   //               images: ['image/url1.png', 'image/url2.png']
//   //         }
//   //       };


//   //   beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//   //     $httpBackend = _$httpBackend_;
//   //     $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

//   //     $routeParams.phoneId = 'xyz';
//   //     scope = $rootScope.$new();
//   //     ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
//   //   }));


//   //   it('should fetch phone detail', function() {
//   //     expect(scope.phone).toEqualData({});
//   //     $httpBackend.flush();

//   //     expect(scope.phone).toEqualData(xyzPhoneData());
//   //   });
//   // });
// });
