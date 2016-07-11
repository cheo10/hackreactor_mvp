console.log("APP.js connected");

angular.module('zen', [])
  .controller('toDo', function($scope){

    $scope.tasks = [];
  });