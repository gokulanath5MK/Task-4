var originalArray = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

var rotatedArrayUsingFunction = (function(arr, rotations) {
  for (var i = 0; i < rotations; i++) {
    var temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
})(originalArray.slice(), k);
console.log("Rotated array using anonymous function:", rotatedArrayUsingFunction);