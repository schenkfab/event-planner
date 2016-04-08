angular.module('myApp').directive('demo', function() {
	return {
		templateUrl: 'app/templates/demo.html', // Where is the html code for the directive?
		controller: 'createAccountCtrl', // What controller should be applied to the directive?
		replace: true // Do you wan't to display the directive tag?
	};
});