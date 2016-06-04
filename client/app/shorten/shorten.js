angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link, function(error, data) {
      // $scope.validationError = error;
      // $timeout(function() {
      //   $scope.validationError = '';
      //   $scope.link.url = '';
      //   $scope.linkForm.$setPristine();
      // }, 5000);
    });
  }

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

});
