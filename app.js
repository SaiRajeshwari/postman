
var app = angular.module('postman', []);
app.controller('MainCtrl', 
	['$scope',
		function($scope){
			$scope.welcomeMsg = "Way to Angular!!";
			$scope.posts = ['post1', 'post2', 'post3', 'post4'];
		}
	]
);


