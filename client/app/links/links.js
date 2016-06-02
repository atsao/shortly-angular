angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data = data;
      console.log(data);
    })
  }

  $scope.addLink = function(link) {
    Link.addLink(link);
  }

  $scope.getLinks();

});
