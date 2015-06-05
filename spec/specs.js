describe('Pizza', function() {
  it('creates a pizza', function() {
    var testToppings = ["cheese", "pepperoni", "olives"];
    var testPizza = new Pizza("1", testToppings, "large");
    expect(testPizza.quantity).to.eq("1");
    expect(testPizza.toppings).to.eq(testToppings);
    expect(testPizza.pizzaSize).to.eq("large");
  });
});
