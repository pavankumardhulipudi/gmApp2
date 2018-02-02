(function() {
	"use strict";

	angular.module("gm.common").controller("TracksCtrl", [
		"$scope", "$state", "MusicFactory", "MusicService",
		function(scope, state, musicFactory, musicService) {

			scope.artists = ["Charlie Puth", "Justin Bieber", "Michael Jackson", "Rihanna", "Taylor Swift"];

			scope.setTrack = function(trackId) {
				musicFactory.setTrack(trackId);
				state.go("lyrics");
			}

			scope.getTrackList = function(){
				let artist = scope.artist || scope.artists[0];
				 musicService.getTrackList(artist).then(function(res) {
					 scope.trackList = res.data.message.body.track_list;
        })
				.catch(function(error){
					console.log("failed", error);
				});
			}

			scope.getTrackList();

		}
	]);

})();
