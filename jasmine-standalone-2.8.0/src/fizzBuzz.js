function FizzBuzz() {
  FizzBuzz.prototype.game = function(number) {
    // (number === 3) ? return "Fizz" : return number;
    if (number === 3) {
      return "Fizz"
    } else {
      return number
    };
  };
};
