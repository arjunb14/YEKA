/**
 * Created by arjub on 24/11/17.
 */
YEKA.directive("nav", function ($location) {
    return {
        restrict: "C",
        link: function (scope, element, attrs) {
            var currentPage = $location.path().split("/")[1];
            setToActive(currentPage);

            element.on("click", "li.nav-item", function () {
                setToActive($(this).attr('id'));
            });

            function setToActive(id) {
                $(element).find("li.nav-item.active").removeClass("active");
                $(element).find("li#" + id).addClass("active");
            }
        }
    }
})