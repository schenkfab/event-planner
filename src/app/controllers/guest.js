angular.module('myApp').controller('guestCtrl', function($scope) {
	$scope.addGuest = function(e) {
		if (e != null) {
			e.preventDefault();
		}
		if($scope.guest != null && $scope.guest != '' && $scope.event.guests.indexOf($scope.guest) === -1) {
			$scope.event.guests.push($scope.guest);
		}
		$scope.guest = '';
	};

	$scope.removeGuest = function(guest, $event) {
		$event.preventDefault();
		if($scope.event.guests.indexOf(guest) !== -1) {
			$scope.event.guests.splice($scope.event.guests.indexOf(guest), 1);
		}
	};
});