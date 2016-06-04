angular.module('shortly.nav', [])
.directive('nav', function() {
  return {
    templateUrl: '/app/nav/nav.html',
    restrict: 'E',
    controller: function($scope, Auth) {
      $scope.loggedIn = true;

      $scope.signout = function() {
        Auth.signout();
        // $scope.loggedIn = false;
      }

      if (Auth.isAuth()) {
        $scope.loggedIn = true;
      } else {
        $scope.loggedIn = false;
      }
    }
  };
});