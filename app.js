'use strict';

angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'appCtrl'
  });
}])

.controller('appCtrl', function() {}
.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                if(element.attr("class") == "down-pointer") {
                    element.removeClass("down-pointer");
                    element.addClass(attrs.toggleClass);
                } else {
                    element.removeClass("up-pointer");
                    element.addClass("down-pointer");
                }
            });
        }
    };
})
