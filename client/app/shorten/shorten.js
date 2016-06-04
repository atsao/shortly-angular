angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link).then(function() {
      $location.path('/links');
    });
  }

  if (!Auth.isAuth()) {
    $location.path('/signin');
  }

});
