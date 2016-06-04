angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var service = {};

  service.getLinks = function() {
    return $http({
      method: 'GET',
      url: '/api/links',
    });
  }

  service.addLink = function(link) {
    $http({
      method: 'POST',
      url: '/api/links',
      data: link,
      // contentType: 'application/json'
    }).then(function(data) {
      return;
    }).catch(function(error) {
      console.error(error);
    })
  }

  service.goToLink = function(code) {
    $http({
      method: 'GET',
      url: '/api/links/' + code,

    });
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
    // console.log('Checking auth: ', !!$window.localStorage.getItem('com.shortly'));
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
})

.factory('Flash', function($rootScope) {
  var queue = [];
  var currentMessage = '';

  $rootScope.$on("$routeChangeSuccess", function() {
    currentMessage = queue.shift() || '';
  });

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getmessage: function() {
      return currentMessage;
    }
  }
});
