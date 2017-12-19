describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("print the number when given a number", function() {

    it("prints '1' when given 1", function() {
      expect(fizzBuzz.game(1)).toEqual(1)
    });
    it("prints '99' when given 99", function() {
      expect(fizzBuzz.game(99)).toEqual(99)
    });
  });

  describe("is divisible by 3", function() {

    it("prints 'Fizz' when given 3", function() {
      expect(fizzBuzz.game(3)).toEqual('Fizz')
    });
    it("prints 'Fizz' when given 6", function() {
      expect(fizzBuzz.game(6)).toEqual('Fizz')
    });
  });
});
