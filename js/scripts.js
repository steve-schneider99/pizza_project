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

Pizza.prototype.changeSize = function(newSize) {
  this.pizzaSize = "";
  this.pizzaSize = this.pizzaSize + newSize;
};

Pizza.prototype.pizzaSizeCost = function() {
  var pizzaSizeList = ["small", "medium", "large"]
  var sizeCost = ((pizzaSizeList.indexOf(this.pizzaSize) + 1) * 5);
  return sizeCost;
};

Pizza.prototype.pizzaCost = function() {
  var costSize = this.pizzaSizeCost;
  var costToppings = this.toppings;
  var quantity = this.quantity;
  var cost = ((costSize + (costToppings * .5)) * quantity);
  // var cost = (((this.pizzaSizeCost)+((this.toppings[0].length)*.5))*(this.quantity));
  return cost;
};

$(document).ready(function() {
  var pizza = new Pizza(0, [], "");
  $("#start-pizza").click(function() {
    $("#start-pizza").slideUp();
    $(".pizzaSize-form").delay(750).fadeIn(750);
    $("#great-choice").hide();
  });

  $("#size-choice").change(function() {
    var pizzaSize = $("#size-choice option:selected").val();
    pizza.changeSize(pizzaSize);
    $("#great-choice").show();
    $(".pizzaSize-form").delay(500).slideUp();
    $(".toppings-form").delay(750).fadeIn(750);
  });

  $("#toppings-button").click(function() {
    var pizzaToppings = $("#pizza-create input:checkbox:checked").map(function() {
      return $(this);
    }).get().val();
    pizza.addToppings(pizzaToppings);
    $(".toppings-form").slideUp();
    $(".quantity-form").delay(750).fadeIn(750);
  });

  $("#quantity-submit").click(function() {
    var pizzaQuantity = parseInt($("input#inputQuantity").val());
    pizza.changeQuantity(pizzaQuantity);
    $(".quantity-form").slideUp();
    $(".pizza-cost").delay(750).fadeIn(750);
    $(".cost").append(pizza.pizzaCost);
  });
});
