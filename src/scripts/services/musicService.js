(function() {
	"use strict";

	angular.module("gm.services").service("MusicService", [
		"$http", "MusicConstants",
		function(http, musicConstants) {

			const config = {
				format: "jsonp",
				callback: "JSON_CALLBACK",
				apikey: musicConstants.API_KEY
			}

			this.getTrackList = function(artist) {
				let urlParams = Object.assign({}, config, {q_artist: artist});
				return http.jsonp(musicConstants.TRACKLIST_URL, {params : urlParams});
    	};

			this.getLyrics = function(trackId) {
				let urlParams = Object.assign({}, config, {track_id: trackId});
				return http.jsonp(musicConstants.LYRICS_URL, {params : urlParams});
			}

		}
	]);

})();
