'use strict';
var indexCtrl = function($scope, $http) {
	$scope.master= {};
	$scope.result = {};
	$scope.success = false;
    $scope.currency ={};
    $scope.transactions = {};
    $scope.convertedValue=0;
	// $scope.getTransactions = function() {
	// 	$http.get('/api/transaction').
	// 		success(function(data, status, headers, config) {
	// 			console.log(JSON.stringify(data));
	// 			$scope.result = data.id;
	// 			console.log("id:" + $scope.result)
	// 			$scope.success = true;
	// 		}).
	// 		error(function(data, status, headers, config) {
	// 			$scope.result = 'Error! ' + data;
	// 		});
	// };
	
	$scope.convert = function(currency) {
        $scope.currency.from ="USD";
        $scope.currency.to="INR";
		$scope.master.from = currency.from;
        $scope.master.to = currency.to;
        $scope.master.value = currency.value;
    	$http.get('/api/convert/' + currency.from + "/" + currency.to + "/" + currency.value).
			success(function(data, status, headers, config) {
				console.log("Converted value is: " + data.convertedValue);
				var convertedValue = parseFloat(data.convertedValue);
				if(convertedValue != NaN)
					$scope.convertedValue = convertedValue;
			}).
			error(function(data, status, headers, config) {
				$scope.result = 'Error! ' + data;
			});
	};

}
