(function() {
	"use strict";

	angular.module("gm.directives").directive("trackRating", [
		function() {
			return {
        restrict: 'E',
        scope: {
					rating: '='
				},
				template: `<span ng-class="ratingClass" ng-bind="rating"></span>`,
        controller: function($scope, $element) {
					if($scope.rating > 80) {
						$scope.ratingClass = "green";
					} else if ($scope.rating > 60) {
						$scope.ratingClass = "orange";
					} else if ($scope.rating > 60) {
						$scope.ratingClass = "yellow";
					} else {
						$scope.ratingClass = "red";
					}
				}
	    };
		}
	]);

})();
