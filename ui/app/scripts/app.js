'use strict';

/**
 * @ngdoc overview
 * @name yekaApp
 * @description
 * # yekaApp
 *
 * Main module of the application.
 */
var YEKA = angular.module('yekaApp', ['ngResource', 'ngRoute', 'ngSanitize']);
YEKA.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/customer', {
            templateUrl: 'views/customer.html',
            controller: 'CustomerController'
        })
        .when('/product', {
            templateUrl: 'views/product.html',
            controller : 'ProductsController'
        })
        .when('/orders', {
            templateUrl: 'views/orders.html',
            controller: 'OrdersController'
        })
        .when('/dc', {
            templateUrl: 'views/delivery_chalan.html',
            controller : 'DCController'
        })
        .when('/settings', {
            templateUrl: 'views/settings.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
