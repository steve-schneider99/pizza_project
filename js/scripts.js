function Pizza(quantity, toppings, pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.quantity = quantity;
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

Pizza.prototype.pizzaSizeCost = function () {
  var pizzaSizeList = ["small", "medium", "large"]
  var cost = ((pizzaSizeList.indexOf(this.pizzaSize) + 1) * 5);
  return cost;
};

Pizza.prototype.pizzaCost = function () {
  var cost = (((this.pizzaSizeCost()) + ((this.toppings.length) * .5)) * (this.quantity));
  return cost;
};
