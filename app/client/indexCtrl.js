'use strict';
var indexCtrl = function($scope, $http, $location) {
	$scope.master= {};
	$scope.result = {};
	$scope.success = false;
	$scope.add = function(user) {
		$scope.master.username = user.username;
		$http.get('/api/user/'+user.username).
			success(function(data, status, headers, config) {
				console.log(JSON.stringify(data));
				$scope.result = data.id;
				console.log("id:" + $scope.result)
				$scope.success = true;
			}).
			error(function(data, status, headers, config) {
				$scope.result = 'Error! ' + data;
			});
	};
}
indexCtrl.$inject = ['$scope','$http','$location'];