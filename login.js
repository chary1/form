routerApp.controller('loginController',['$scope','$state','$http','$rootScope', function($scope,$state,$http,$rootScope){

	$scope.message="chary";
	

	$scope.submit = function(){
		
		localStorage.setItem('username', 'Chary');
		$rootScope.username = 'Chary';
		$state.go('home');
	}



	 $scope.reset = function() {
        $scope.user.email = '';
        $scope.user.password = '';
        $scope.loginform.$setPristine();
     
    }


}]);
