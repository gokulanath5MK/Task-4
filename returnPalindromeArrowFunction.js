var stringArray = ["level", "hello", "madam", "world", "racecar"];

var palindromesUsingFunction = ((arr) => {
  var result = [];
  
  var isPalindrome = function(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };
  
  for (var i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      result.push(arr[i]);
    }
  }
  
  return result;
})(stringArray);

console.log("Palindromes using anonymous function:", palindromesUsingFunction);