angular.module('todoApp', [])
  .controller('TaskController', function($scope, $http) {
    const API_URL = 'http://localhost:3000/api/tasks';

    $scope.tasks = [];
    $scope.newTask = {};

    $scope.getTasks = function() {
      $http.get(API_URL).then(function(response) {
        $scope.tasks = response.data;
      });
    };
    $scope.addTask = function() {
      $http.post(API_URL, $scope.newTask).then(function() {
        $scope.newTask = {};
        $scope.getTasks();
      });
    };

    $scope.markDone = function(id) {
      $http.put(API_URL + '/' + id + '/done').then(function() {
        $scope.getTasks();
      });
    };

    $scope.getTasks();
  });


