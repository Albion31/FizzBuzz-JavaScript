describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("print the number when given a number", function() {

    it("prints '1' when given 1", function() {
      expect(fizzBuzz.game(1)).toEqual(1)
    });
    it("prints '4' when given 4", function() {
      expect(fizzBuzz.game(4)).toEqual(4)
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

  describe("is divisible by 5", function() {

    it("prints 'Buzz' when given 5", function(){
      expect(fizzBuzz.game(5)).toEqual('Buzz')
    });
    it("prints 'Buzz' when given 10", function(){
      expect(fizzBuzz.game(10)).toEqual('Buzz')
    });
  });

  describe("is divisible by 15", function(){

    it("prints 'Fizzbuzz' when given 15", function(){
      expect(fizzBuzz.game(15)).toEqual('FizzBuzz')
    });
    it("prints 'Fizzbuzz' when given 30", function(){
      expect(fizzBuzz.game(30)).toEqual('FizzBuzz')
    });
  });
});
