/* global angular */
angular.module('instalcohol').controller('loginCtrl', function($scope) {
    $scope.title = 'login';
    $scope.account = {
        user: '',
        password: ''
    }
    
    $scope.submitForm = function(){
        console.log($scope.account);
    }
});