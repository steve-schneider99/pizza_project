function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

function Toppings() {
  this.toppingsList = ["cheese", "pepperoni", "olives", "mushrooms", "onions", "peppers", "pineapple", "ham", "anchovies"];

};


Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.changeQuantity = function(newQuantity) {
  this.quantity = newQuantity;
};

Pizza.prototype.changeSize = function (newSize) {
  this.pizzaSize = "";
  this.pizzaSize = this.pizzaSize + newSize;
};
