angular.module('myApp').controller('mainCtrl', function($scope, pageService, passwordService) {

	// Define $scope variables for used services
	$scope.passwordCriteria = passwordService.passwordCriteria;

	$scope.checkPassword = function() {
		// Check all the password requirements.
		angular.forEach($scope.passwordCriteria, function(value) {
			var regEx = new RegExp(value.regEx);
			if($scope.user.password != null && regEx.test($scope.user.password) && $scope.user.password.length > 0) {
				value.ok = true;
			} else {
				value.ok = false;
			}
		});
	};
	$scope.events = [{name: 'Event 1',
	host: 'John Peters', 
	beginDatetime: new Date(2016, 5, 2, 11, 0, 0, 0), 
	endDatetime: new Date(2016, 5, 3, 11, 0, 0, 0), location: 'Miami', guests: 'None'}];
	$scope.event = {};
	$scope.event.guests = [];

	// pattern to be used to verify the password input in ng-pattern
	$scope.pwPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

	// An easier way to access the pageService from ng-*
	$scope.currentPage = function () {
		return pageService.getCurrentPage();
	};

	// Initially set the page to create account.
	pageService.setCurrentPage({title: 'Create Account', id: 'createAccount'});

	$scope.createAccount = function() {
		pageService.setCurrentPage({title: 'Create Event', id: 'createEvent'});
	};

	$scope.createEvent = function() {
		$scope.event.host = $scope.user.name;
		$scope.events.push($scope.event);
		pageService.setCurrentPage({title: 'Display Events', id: 'displayEvents'});
	};
});