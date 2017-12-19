function FizzBuzz() {
};

  FizzBuzz.prototype.game = function(number) {
    if (this._isDivisibleBy(15, number)) {
      return "FizzBuzz"
    }
    else if (this._isDivisibleBy(3, number)) {
      return "Fizz"
    }
    else if (this._isDivisibleBy(5, number)) {
      return "Buzz"
    }
    else {
      return number
    };
  };

FizzBuzz.prototype._isDivisibleBy = function(divisibleBy, numberGiven) {
  return numberGiven % divisibleBy === 0
};

var fizzBuzz = new FizzBuzz();
for (i = 1; i <= 100; i++) {
  console.log(fizzBuzz.game(i))
};
