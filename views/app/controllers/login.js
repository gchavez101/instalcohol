/* global angular */
angular.module('instalcohol').


controller('loginCtrl', function($scope, AuthService, $location) {
    $scope.title = 'login';
    
    $scope.user = {
    name: '',
    password: ''
  };
 
  //Login feature, it calls the AuthService that was built in services.js
  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
        $location.path('/welcome')    
    }, function(errMsg) {
      console.log('incorrect login');
    });
  };
});