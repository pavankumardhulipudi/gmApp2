(function() {
	"use strict";

	angular.module("gm.app").config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("tracks", {
				url: "/tracks",
				templateUrl: "/views/tracks.html",
				controller: "TracksCtrl"
			})
			.state("lyrics", {
				url: "/lyrics",
				templateUrl: "/views/lyrics.html",
				controller: "LyricsCtrl",
				resolve: {
          track: function(MusicFactory){
						return MusicFactory.track;
      		},
					getLyrics: function(MusicService, track){
						return MusicService.getLyrics(track.track_id).then(function(resp){
							return resp.data.message.body.lyrics;
						})
					}
				}
			});
		$urlRouterProvider.otherwise("/tracks");
	});

})();
