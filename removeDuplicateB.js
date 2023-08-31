var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

var uniqueArrayUsingFunction = (function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
})(arrayWithDuplicates);

console.log("Unique array using anonymous function:", uniqueArrayUsingFunction);
