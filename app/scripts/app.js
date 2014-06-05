'use strict';

angular
  .module('shoppingCartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/moreInfo', {
        templateUrl: 'views/details.html',
        controller: 'StoreController'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'StoreController'
      })
      .when('/newproduct', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
  })