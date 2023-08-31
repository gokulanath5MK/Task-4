var numberArray = [1, 2, 3, 4, 5];

var sumUsingFunction = ((arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(numberArray);

console.log("Sum using anonymous function:", sumUsingFunction);