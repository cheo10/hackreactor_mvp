console.log("APP.js connected");

angular.module('zen', [])
  .controller('toDoList', function($scope){

    $scope.list = [];
    $scope.completed = [];
    $scope.focus = '';
    $scope.main = true;

    $scope.add = function() {
      if($scope.task){
        $scope.list.push($scope.task);
        //clear input field
        $scope.task = "";
      }
    };

    $scope.done = function() {
      var done = $scope.list.splice(this.$index, 1)[0];
      $scope.completed.push(done);
    };

    //redo task, delete from completed
    $scope.redo = function() {
      var redo = $scope.completed.splice(this.$index, 1)[0];
      $scope.list.push(redo);
    };

    $scope.deleteFromList = function(item) {
      $scope.list.splice($scope.list.indexOf(item), 1);
    };

    $scope.deleteFromCompleted = function(item) {
      $scope.completed.splice($scope.completed.indexOf(item), 1);
    };

    $scope.toggle = function(item){
      item = item || null;
      if(!item){
        $scope.main = true;
        $scope.focus = '';
      } else{
        $scope.main = false;
        $scope.focus = String(item);
      }

    }

    $scope.shiftView = function(){
      $scope.main = false;
    }
  });