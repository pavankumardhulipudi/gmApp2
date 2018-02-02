(function() {
	"use strict";

	angular.module("gm.common", []);

	angular.module("gm.factories", [
		"gm.common"
	]);

	angular.module("gm.services", [
		"gm.common"
	]);

	angular.module("gm.directives", [
		"gm.common"
	]);

	angular.module("gm.filters", [
		"gm.common"
	]);

	angular.module("gm.constants", [
		"gm.common"
	]);

	angular.module("gm.app", [
		"ui.router",
		"gm.common",
		"gm.factories",
		"gm.services",
		"gm.directives",
		"gm.filters",
		"gm.constants"
	]);

})();
