function FizzBuzz() {
  FizzBuzz.prototype.game = function(number) {
    // (number === 3) ? return "Fizz" : return number;
    if (number % 3 === 0) {
      return "Fizz"
    }
    else if (number === 5) {
      return "Buzz"
    }
    else {
      return number
    };
  };
};
