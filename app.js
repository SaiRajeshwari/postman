
var app = angular.module('postman', []);
app.controller('MainCtrl', 
	['$scope', function($scope){

			$scope.welcomeMsg = "Way to Angular!!";
			$scope.posts = [
				{title: 'Presidential Election', upvote: 10},
				{title: 'Stock Market', upvote: 8},
				{title: 'Venus And Earth', upvote: 15},
				{title: 'FIFA', upvote: 12},
				{title: 'India', upvote: 22}
			];
			$scope.addPost = function(){
				if(!$scope.newPostTitle || !$scope.newPostUpvote){return;}
				$scope.posts.push({title: $scope.newPostTitle, upvote: $scope.newPostUpvote});
				$scope.newPostTitle = '';
				$scope.newPostUpvote = '';
			}


		}
	]
);


