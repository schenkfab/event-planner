angular.module('myApp').service('passwordService', function() {

	this.passwordCriteria = [
		{
			id: 1,
			description: 'Password contains at least 8 characters.',
			regEx: '^.{8,}$',
			ok: false
		},
		{
			id: 2,
			description: 'Password contains at least one upper-case characters.',
			regEx: '.*[A-Z].*',
			ok: false
		},
		{
			id: 3,
			description: 'Password contains at least one lower-case characters.',
			regEx: '.*[a-z].*',
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
			regEx: '.*[#?!@$%^&*-].*',
			ok: false
		}
	];
});