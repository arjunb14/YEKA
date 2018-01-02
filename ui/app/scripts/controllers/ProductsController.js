'use strict';
/**
 * Created by arjub on 25/11/17.
 */
YEKA.controller("ProductsController", function ($scope, $log, HttpService) {

    $scope.list = function () {
        HttpService.products.get({}, function (response) {
            $scope.products = response;
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.add = function () {
        alert("add");
    };

    $scope.edit = function () {
        alert("edit");
    };

    $scope.delete = function () {
        alert("delete");
    };

    $scope.list();
});