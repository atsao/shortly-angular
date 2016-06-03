angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = [];
  
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data.data;
    }).catch();
  }

  $scope.goToLink = function(code) {
    console.log('code:', code);
    Links.goToLink(code);
  }

  $scope.getLinks();
});
