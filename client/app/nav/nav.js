angular.module('shortly.nav', [])
.directive('nav', function() {
  return {
    templateUrl: '/app/nav/nav.html',
    replace: true,
    restrict: 'E',
    controller: function($scope, Auth) {
      $scope.signout = function() {
        Auth.signout();
        // $scope.loggedIn = false;
      }

      // $scope.loggedIn = Auth.loggedInUser;

      // if (Auth.isAuth()) {
      //   $scope.loggedIn = true;
      // } else {
      //   $scope.loggedIn = false;
      // }

      $scope.$watch(function() { return Auth.isAuth(); }, function(flag) {
        $scope.loggedIn = flag;
      })
    }
  };
});