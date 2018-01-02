'use strict';

/**
 * @ngdoc function
 * @name yekaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yekaApp
 */
angular.module('yekaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
