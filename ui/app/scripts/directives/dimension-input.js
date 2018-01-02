'use strict';
/**
 * Created by arjub on 26/11/17.
 */
YEKA.directive("dimInput", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            param: "="
        },
        templateUrl: "views/template/dim-input-template.html",
        link: function (scope, element, attrs) {
            scope.dimensions = ["mm", "cm", "in", "m"];
            scope.id = attrs.id;
            scope.placeholder = attrs.placeHolder;

            if (scope.param == undefined) {
                scope.param = {
                    value: 0.00,
                    dimension: scope.dimensions[0]
                }
            }

        }
    }
});