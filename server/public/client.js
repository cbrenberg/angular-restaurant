console.log('client.js')

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function() {
  let self = this;

  self.foods = [];

  self.foodToAdd = {};

  self.addFood = function(userInput) {
    //if deliciousness between 1-100 inclusive, push to array
    if(userInput.deliciousness <= 100 && userInput.deliciousness >= 1) {
      self.foods.push(userInput);
      self.foodToAdd = {};
    } else {
      alert('Deliciousness must be a number between 1 and 100')
    }
  };
})