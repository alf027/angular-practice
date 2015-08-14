var app = angular.module("firstApp1", []);

app.controller("ExercisesController", function ($scope, $sce) {
  $scope.number = 5;

  $scope.pickRandomNumber = function () {
    $scope.number = Math.floor(Math.random() * 10) + 1
  };

  $scope.reverseWord = function (word) {
    $scope.word = word.split('').reverse().join('')
  };

  $scope.p1Score = 0;
  $scope.p2Score = 0;
  $scope.totalScore = 0;
  $scope.winner = '';
  $scope.serving = '';
  $scope.serves = 0;

  $scope.reset = function () {
    $scope.p1Score = 0;
    $scope.p2Score = 0;
    $scope.totalScore = 0;
    $scope.winner = '';
    $scope.serving = '';
    $scope.serves = 0;

  }


  $scope.playPong = function (player) {

    if ($scope.totalScore === 0) {
      $scope.serving = 1;
    }

    if (player === '1') {
      $scope.p1Score++
    } else {
      $scope.p2Score++
    }

    $scope.totalScore++;

    if ($scope.serveToggle === true) {
      $scope.serveToggle = false;
      $scope.serving = $scope.serving === 1 ? 2 : 1;
    }

    if ($scope.totalScore % 2 != 0) {
      $scope.serveToggle = true;
    }


    if ($scope.p1Score == 11 || $scope.p2Score == 11) {
      $scope.winner = $scope.p1Score == 11 ? 'Player 1' : "Player 2";
      $scope.loser = $scope.p1Score == 11 ? 'Player 2' : "Player 1";
      console.log($scope.winner)
    }
  }

});

app.controller("ContactsController", function ($scope) {
   $scope.contacts = [{name:'John Alfano',email:'alf027@gmail.com',phone:'205-410-6494'},{name:'Tasha Alfano',email:'talfano@gmail.com',phone:'706-332-3848'}];
   $scope.newContact = {};

  $scope.addContact = function() {
    $scope.contacts.push($scope.newContact);

  }




})