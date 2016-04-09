angular.module('myApp').controller('mainCtrl', function($scope, pageService, passwordService) {

	// Define $scope variables for used services
	$scope.passwordCriteria = passwordService.passwordCriteria;


	$scope.checkPassword = function() {
		// Check all the password requirements.
		angular.forEach($scope.passwordCriteria, function(value) {
			let regEx = new RegExp(value.regEx);
			if($scope.user.password != null && regEx.test($scope.user.password) && $scope.user.password.length > 0) {
				value.ok = true;
			} else {
				value.ok = false;
			}
		});
	};

	$scope.pwPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

	$scope.currentPage = function () {
		return pageService.getCurrentPage();
	};

	pageService.setCurrentPage({title: 'Create Account', id: 'createAccount'});

	$scope.createAccount = function() {

		console.log($scope.user);
	};
});