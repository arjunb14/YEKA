'use strict';
/**
 * Created by arjub on 25/11/17.
 */

YEKA.controller("DCController", function($scope, $log, HttpService){

    $scope.list = function () {
        HttpService.dc.get({}, function (response) {
            $scope.dcs = response;
        }, function (err) {
            $log.error(err);
        });
    };

    $scope.add = function () {
        alert("add");
    };

    $scope.delete = function () {
        alert("delete");
    };

    $scope.list();
});
