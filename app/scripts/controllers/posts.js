'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */

  app.controller('PostsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.posts = [];
    $scope.post = {url: 'http://', title: ''};
    
    $scope.addPost = function() {
      $scope.posts.push($scope.post);
      $scope.post = {url: 'http://', title: ''};
      console.log ($scope.posts);
    };

    $scope.deletePost = function(index) {
      $scope.posts.splice(index,1);
    };
  });
