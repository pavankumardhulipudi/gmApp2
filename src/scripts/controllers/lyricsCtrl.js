(function() {
	"use strict";

	angular.module("gm.common").controller("LyricsCtrl", [
		"$scope", "getLyrics", "MusicFactory",
		function(scope, getLyrics, musicFactory) {

			scope.track = musicFactory.track;

			if(undefined != getLyrics) {
				scope.lyrics = getLyrics.lyrics_body;
			}

		}
	]);

})();
