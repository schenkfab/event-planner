angular.module('myApp').controller('createAccountCtrl', function() {

	$scope.passwordCriteria = [
		{
			id: 1,
			description: 'Password contains at least 8 characters.',
			regEx: '^.{8,}$'
		},
		{
			id: 2,
			description: 'Password contains at least two upper-case characters.',
			regEx: ''
		},
		{
			id: 3,
			description: 'Password contains at least two lower-case characters.',
			regEx: ''
		},
		{
			id: 4,
			description: 'Password contains at least one digit.',
			regEx: ''
		},
		{
			id: 5,
			description: 'Password contains at least one special character.',
			regEx: ''
		}
	];

	$scope.checkPassword = function() {
		// Check all the password requirements.
	};

});