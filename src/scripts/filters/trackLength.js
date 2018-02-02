(function() {
	"use strict";

	angular.module("gm.filters").filter("trackLength", function() {

		return function(input) {

			return Math.round(input/60) + ":" + input%60;

	  }

	});

})();
