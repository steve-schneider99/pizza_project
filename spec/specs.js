describe('Pizza', function() {
  it('creates a pizza', function() {
    var testPizza = new Pizza(1, ["cheese", "pepperoni", "olives"], "large");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.toppings).to.eql(["cheese", "pepperoni", "olives"]);
    expect(testPizza.pizzaSize).to.equal("large");
  });

  it('adds a topping to a pizza', function() {
    var testPizza = new Pizza(1, [], "large");
    testPizza.addToppings("pepperoni");
    expect(testPizza.toppings).to.eql(["pepperoni"]);
  });

  it('changes the quantity of the pizza', function() {
    var testPizza = new Pizza(1, [], "large");
    testPizza.changeQuantity(2);
    expect(testPizza.quantity).to.eq(2);
  });

  it("changes the size of the pizza", function() {
    var testPizza = new Pizza(1, [], "large");
    testPizza.changeSize("small");
    expect(testPizza.pizzaSize).to.equal("small");
  });

  it("calculates the cost of a pizza", function() {
    var testPizza = new Pizza(1, [], "small");
    testPizza.changeSize("large");
    testPizza.addToppings("cheese");
    testPizza.changeQuantity(2);
    expect(testPizza.pizzaCost()).to.eq(31);
  });
});
