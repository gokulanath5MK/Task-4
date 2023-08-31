var numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var primeNumbersUsingFunction = (function(arr) {
  var result = [];
  
  var isPrime = function(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  
  return result;
})(numberArray);

console.log("Prime numbers using anonymous function:", primeNumbersUsingFunction);