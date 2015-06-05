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
  var cost = (((this.pizzaSizeCost) + ((this.toppings.length) * .5)) * (this.quantity));
  return cost;
};

$(document).ready(function() {
  var pizza = new Pizza(0, [], "");
  $("#start-pizza").click(function() {
    $("#start-pizza").slideUp();
    $(".pizzaSize-form").delay(750).fadeIn(750);
    $("#great-choice").hide();
      $("#debug-size").text(pizza.pizzaSize);
      $("#debug-toppings").text(pizza.toppings);
      $("#debug-quantity").text(pizza.quantity);
      $("#debug-cost").text(pizza.pizzaCost);
  });

  $("#size-choice").change(function() {
    var pizzaSize = $("#size-choice option:selected").val();
    pizza.changeSize(pizzaSize);

    // $("#great-choice").show();
    // $("#great-choice").delay(750).hide();
    $(".pizzaSize-form").slideUp();
    $(".toppings-form").delay(750).fadeIn(750);
      $("#debug-size").text(pizza.pizzaSize);
      $("#debug-toppings").text(pizza.toppings);
      $("#debug-quantity").text(pizza.quantity);
      $("#debug-cost").text(pizza.pizzaCost);
  });

  $("#toppings-button").click(function() {
    var pizzaToppings = [];
    $(".toppings-form").slideUp();
    $(".quantity-form").delay(750).fadeIn(750);
      $("#debug-size").text(pizza.pizzaSize);
      $("#debug-toppings").text(pizza.toppings);
      $("#debug-quantity").text(pizza.quantity);
      $("#debug-cost").text(pizza.pizzaCost);
  });

  $("#quantity-submit").click(function() {
    var pizzaQuantity = parseInt($("input#inputQuantity").val());
    pizza.changeQuantity(pizzaQuantity);

    $(".quantity-form").slideUp();
    $(".pizza-cost").delay(750).fadeIn(750);
      $("#debug-size").text(pizza.pizzaSize);
      $("#debug-toppings").text(pizza.toppings);
      $("#debug-quantity").text(pizza.quantity);
      $("#debug-cost").text(pizza.pizzaCost);
    });



});
