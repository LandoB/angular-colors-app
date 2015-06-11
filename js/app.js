var app = angular.module('myApp', ['ngRoute']);

// Declare app level module which depends on filters, and services

app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    when('/conditions', {
      templateUrl: 'partials/conditions',
      controller: 'ConditionsCtrl'
    }).
    when('/tenday', {
      templateUrl: 'partials/tenday',
      controller: 'TenDayCtrl'
    }).
    when('/webcams', {
      templateUrl: 'partials/webcams',
      controller: 'WebCamsCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});
