function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

function Toppings() {
  this.toppingsList = [];

};


Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
};
