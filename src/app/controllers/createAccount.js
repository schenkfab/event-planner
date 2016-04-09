angular.module('myApp').controller('createAccountCtrl', function($scope) {

	$scope.passwordCriteria = [
		{
			id: 1,
			description: 'Password contains at least 8 characters.',
			regEx: '^.{8,}$',
			ok: false
		},
		{
			id: 2,
			description: 'Password contains at least two upper-case characters.',
			regEx: '.*[A-Z].*[A-Z].*',
			ok: false
		},
		{
			id: 3,
			description: 'Password contains at least two lower-case characters.',
			regEx: '.*[a-z].*[a-z].*',
			ok: false
		},
		{
			id: 4,
			description: 'Password contains at least one digit.',
			regEx: '.*[0-9].*',
			ok: false
		},
		{
			id: 5,
			description: 'Password contains at least one special character.',
			regEx: '',
			ok: false
		}
	];

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

});