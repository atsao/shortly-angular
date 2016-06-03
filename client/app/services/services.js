angular.module('shortly.services', [])

.factory('Links', function ($http, $q) {
  // Your code here
  var service = {};

  service.getLinks = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/api/links'
    }).then(function(data) {
      deferred.resolve(data);
    }).catch(function(error) {
      console.error(error);
      deferred.reject('Error!');
    });

    return deferred.promise;
  }

  service.addLink = function(link) {
    var deferred = $q.defer();

    console.log('link: ', link);

    $http({
      method: 'POST',
      url: '/api/links',
      data: link
    }).then(function(data) {
      console.log(data);
      deferred.resolve(data);
    }).catch(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return service;
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
