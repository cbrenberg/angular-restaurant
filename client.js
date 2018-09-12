console.log('client.js')

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function() {
  let self = this;

  self.foods = [
    {name: 'taco'},
    {name: 'potato'}
  ];
})