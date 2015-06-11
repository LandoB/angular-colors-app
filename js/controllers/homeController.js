app.controller('HomeCtrl', function($scope){
	$scope.colors = ['RED', 'WHITE', 'BLUE', 'GREEN', 'BLACK', 'BROWN', 'PURPLE', 'ORANGE'];

	$scope.colorClick = function (color) {
		alert(color);
	}

})
