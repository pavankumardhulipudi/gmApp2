(function() {
	"use strict";

	angular.module("gm.factories").factory("MusicFactory", [
		function() {

			var musicFactory = {};

			musicFactory.track = {};

			musicFactory.setTrack = function(track) {
				musicFactory.track = track;
			};

			return musicFactory;

		}
	]);

})();
