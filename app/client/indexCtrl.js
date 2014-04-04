'use strict';
var indexCtrl = function($scope, $http) {
	$scope.master= {};
	$scope.result = {};
//	$scope.success = false;
//	$scope.add = function(user) {
//		$scope.master.username = user.username;
//		$http.get('/api/user/'+user.username).
//			success(function(data, status, headers, config) {
//				console.log(JSON.stringify(data));
//				$scope.result = data.id;
//				console.log("id:" + $scope.result)
//				$scope.success = true;
//			}).
//			error(function(data, status, headers, config) {
//				$scope.result = 'Error! ' + data;
//			});
//	};
	$scope.success = false;
    $scope.currency ={}
    $scope.currency.from ="USD";
    $scope.currency.to="HKD";
	$scope.convert = function(currency) {
        $scope.currency.from ="USD";
        $scope.currency.to="HKD";
		$scope.master.from = currency.from;
        $scope.master.to = currency.to;
        $scope.master.value = currency.value;
		$http.get('/api/convert/' + currency.from + "/" + currency.to + "/" + currency.value).
			success(function(data, status, headers, config) {
				console.log(JSON.stringify(data));
				$scope.currency.convertedValue = data.convertedValue;
				console.log("id:" + $scope.result);
				$scope.success = true;
			}).
			error(function(data, status, headers, config) {
				$scope.result = 'Error! ' + data;
			});
	};

}
indexCtrl.$inject = ['$scope','$http'];
