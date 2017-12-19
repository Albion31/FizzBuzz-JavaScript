describe("FizzBuzz", function() {
  var fizzBuzz
  describe("print the number when given a number", function() {
    fizzBuzz = new FizzBuzz();
    it("prints '1' when given 1", function() {
      expect(fizzBuzz.game(1)).toEqual(1)
    });
    it("prints '99' when given 99", function() {
      expect(fizzBuzz.game(99)).toEqual(99)
    });
  });
});
