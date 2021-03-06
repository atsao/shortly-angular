angular.module('shortly.nav', [])
.directive('nav', function() {
  return {
    templateUrl: '/app/nav/nav.html',
    replace: false,
    restrict: 'E',
    controller: function($scope, Auth) {
      $scope.signout = function() {
        Auth.signout();
      }

      $scope.$watch(function() { return Auth.isAuth(); }, function(flag) {
        $scope.loggedIn = flag;
      })
    }
  };
});