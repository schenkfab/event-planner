angular.module('myApp').directive('events', function() {
	return {
		templateUrl: 'app/templates/events.html', // Where is the html code for the directive?
		replace: true // Do you wan't to display the directive tag?
	};
});