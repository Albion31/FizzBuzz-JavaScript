function FizzBuzz() {

  FizzBuzz.prototype.game = function(number) {
    // (number === 3) ? return "Fizz" : return number;
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
};

FizzBuzz.prototype._isDivisibleBy = function(divisibleBy, numberGiven){
  return numberGiven % divisibleBy === 0
};
