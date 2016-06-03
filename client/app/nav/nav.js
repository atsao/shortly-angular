angular.module('shortly.nav', [])
.directive('nav', function() {
  return {
    templateUrl: '/app/nav/nav.html',
    restrict: 'E',
    controller: function($scope, Auth) {
      $scope.signout = function() {
        Auth.signout();
      }
    }
  };
});