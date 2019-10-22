routerApp.controller('formController', function($scope, $http, $timeout) {
   
    $scope.errormsg = '';
    $scope.successmsg = '';
    $scope.statusmsg = '';
$scope.createform = function(form)
  {
$scope.submitted = true;
if(form.$invalid){
   return true;
}
var inputData  = {
      'user_emailid' : $scope.user_emailid,
      'user_password' : $scope.user_password,
      'newhire_emailId' : $scope.newhire_emailId
   }
        $http({
  method : 'POST',
  url: 'https://askstaffing.xuperb.com/askstaffing_candidate/newhirepswd',
  data: JSON.stringify(inputData)
})
   .then(function(response)
   {
            if(response.data.Error || response.data.Error == 'true'){
            $scope.errormsg = response.data.newhire_pswd;
            $timeout(function(){
$scope.errormsg = '';
            }, 4000)
            }
            if(response.data.Success || response.data.Success == 'true'){
            $scope.successmsg = response.data.newhire_pswd;
            $scope.statusmsg = response.data.status;
            }
},function(response){
  $scope.errorData = response.data.Error;
});
}

  $scope.resetForm = function() {
    $scope.user_emailid = '';
$scope.user_password = '';
$scope.newhire_emailId = '';
$scope.myForm.$setPristine();
     
    }

});