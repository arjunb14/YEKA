'use strict';
/**
 * Created by arjub on 25/11/17.
 */
YEKA.controller("CustomerController", function ($scope, $log, HttpService) {

    $scope.list = function () {
        HttpService.customers.get({}, function (response) {
            $scope.customers = response;
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