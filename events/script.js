var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function ($scope) {
	$scope.boxes = [{ "name": "HR SUMMIT ", "tagline": "“Optimize Your Human Equity", "imageUrl": "https://svitprakarsh.github.io/PrakarshGraphics/events/ancillary/2019/hr-summit.webp", "dataUrl": "https://svitprakarsh.github.io/PrakarshJSON/events/ancillary/allevents/hrsummit.json" },
	{ "name": "MIND POWER", "tagline": "Boost your career and focus on goal", "imageUrl": "https://svitprakarsh.github.io/PrakarshGraphics/events/ancillary/2019/brain-power.webp", "dataUrl": "https://svitprakarsh.github.io/PrakarshJSON/events/ancillary/allevents/mind-power.json" },
	{ "name": "INDIAN AIRFORCE ", "tagline": "", "imageUrl": "https://svitprakarsh.github.io/PrakarshGraphics/events/ancillary/2019/indian-air-force.webp", "dataUrl": "https://svitprakarsh.github.io/PrakarshJSON/events/ancillary/allevents/indian-airforce.json" },
	{ "name": "EMPLOYMENT MANTRA", "tagline": "", "imageUrl": "https://svitprakarsh.github.io/PrakarshGraphics/events/ancillary/2019/employment-mantra.webp", "dataUrl": "https://svitprakarsh.github.io/PrakarshJSON/events/ancillary/allevents/employment-mantra.json" },
	{ "name": "Vlog-Along", "tagline": "", "imageUrl": "https://svitprakarsh.github.io/PrakarshGraphics/events/ancillary/2019/vlog-along.webp", "dataUrl": "https://svitprakarsh.github.io/PrakarshJSON/events/ancillary/allevents/vlog-along.json" },
	];

	$scope.selected = [];
	$scope.selectBox = function (item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function () {
		$scope.selected = [];
	}
})

app.directive('box', function () {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function () {
			var box = this;

			box.goFullscreen = function (e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function (scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.imageUrl + ')'
			})
		}
	}
})

app.directive('bigBox', function ($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function () {
			var box = this;
		},
		link: function (scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}

			element.css(css);

			$timeout(function () {
				element.css({
					top: '22%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function () {
				element.css({
					width: '80%',
					overflow: 'scroll',
					'overflow-x': 'hidden',
					overflow: '-moz-scrollbars-none',
					'-ms-overflow-style': 'none',
					height: '100%'
				})
			}, 500)

			$timeout(function () {
				element.addClass('show');
			}, 800)
		}
	}
})