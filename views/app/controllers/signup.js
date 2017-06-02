/*global angular*/

angular.module('instalcohol')

.controller('signupCtrl', function($scope, AuthService) {
    
    //data from the html
  $scope.user = {};
  
  
  //Using Angular Auth service to log user in.
  $scope.signup = function() {
    console.log($scope.user);
      //register the user and then send them to login page.
    AuthService.register($scope.user).then(function(msg) {
      console.log('Signed up');
      window.location.href = '/#!/login';
    }, function(errMsg) {
      console.log('Error: '+ errMsg);
    });
  };
})