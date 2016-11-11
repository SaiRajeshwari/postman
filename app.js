
var app = angular.module('postman', []);

app.factory('posts',
	[function(){
		var o = {
			posts: [{title:'hello', link:'', upvote:0},
					{title:'sai', link:'www.sai.org', upvote:10},
					{title:'rajee', link:'www.google.com', upvote:5},
					{title:'esp', link:'', upvote:2}]
		};
		return o;

	}]
);


app.controller('MainCtrl', 
	['$scope', 'posts', function($scope, posts){

			$scope.welcomeMsg = "Way to Angular!!";
			$scope.posts = posts.posts;
			$scope.addPost = function(){
				if(!$scope.newPostTitle){
					$scope.newPostLink = '';
					return;
				}
				$scope.posts.push({title: $scope.newPostTitle, upvote: 7, link:$scope.newPostLink});
				$scope.newPostTitle = '';
				$scope.newPostLink = '';
			}

			$scope.incrementUpvote = function(post){
				post.upvote += 1;
			}
		}
	]
);
	



