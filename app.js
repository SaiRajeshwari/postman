
var app = angular.module('postman', []);
app.controller('MainCtrl', 
	['$scope',
		function($scope){
			$scope.welcomeMsg = "Way to Angular!!";
		}
	]
);


