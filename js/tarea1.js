var hw = angular.module('task', ["LocalStorageModule"]); //como dependencia
hw.controller('hwController', function ($scope,localStorageService) {
	if(localStorageService.get("angularList")){ //identifical la lista
		$scope.arrHw = localStorageService.get("angularList");
	} else {
		$scope.arrHw = [];
	}
	
	$scope.add = function() {
		// var Todo = { name: $scope.names, desc:$scope.descriptions, done:false};
		$scope.arrHw.push($scope.newAct);
		$scope.newAct = {};
		localStorageService.set("angularList",$scope.arrHw);
	};
	$scope.remove = function() {
		var list = $scope.arrHw;
		$scope.arrHw = [];
		angular.forEach(list, function(x) {
			if (!x.done) {
				$scope.arrHw.push(x);
			};
		});
		localStorageService.set("angularList",$scope.arrHw);
	};
});
