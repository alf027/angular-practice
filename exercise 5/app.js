var app = angular.module("firstApp", [])
  .filter('html',function($sce){
  return function(input){
    return $sce.trustAsHtml(input);
  }
});



app.controller("ExercisesController", function($scope,$sce){
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"]
  $scope.duplicates = [1,1,2,5,6,9,9,9];
  $scope.order = 'price';
  $scope.objects = {key1:'test',key2:'test2',key3:'test3'}
  $scope.cameras =   [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ]
});



