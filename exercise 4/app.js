var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
  if($scope.test === 3) {
    $scope.result = 'omg 3!'
  }
  $scope.test = 'test'

});

app.controller("ExercisesController", function($scope){
  $scope.favColor='blue';
  $scope.secondsInCentury = 31536000 * 100;
  $scope.curDate = Date.now()
});

