angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    // Links.addLink($scope.link.url).then(function(data) {
    //   console.log('success!');
    // }).catch(function(error) {
    //   console.error(error);
    // });
    Links.addLink($scope.link);
  }

});
