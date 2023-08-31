var array1 = [1, 3, 5, 7];
var array2 = [2, 4, 6, 8];


var medianUsingFunction = function(arr1, arr2) {
  var combinedArray = arr1.concat(arr2);
  combinedArray.sort(function(a, b) {
    return a - b;
  });
  
  var middleIndex = Math.floor(combinedArray.length / 2);
  
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
}(array1, array2);

console.log("Median using anonymous function:", medianUsingFunction);