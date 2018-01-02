'use strict';

/**
 * @ngdoc function
 * @name yekaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yekaApp
 */
YEKA.controller('OrdersController', function ($scope, $log, HttpService) {

    $scope.get = function () {
        HttpService.orders.get({}, function (response) {
            $scope.orders = response;
        }, function (err) {
            $log.error("Error getting all orders")
        });
    };

    $scope.get();
});
