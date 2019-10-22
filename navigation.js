routerApp.controller('navigationController',['$scope','$state','$http','$rootScope', function($scope,$state,$http,$rootScope){

	


	$scope.logout = function(){
		localStorage.removeItem('username');
		$rootScope.username = null;
		$state.go('login');
	}




}]);
