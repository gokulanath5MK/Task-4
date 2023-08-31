var stringArray = ["hello world", "javascript is awesome", "programming is fun"];

var titleCapsArray = (function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var words = arr[i].split(" ");
    for (var j = 0; j < words.length; j++) {
      var word = words[j];
      var titleCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[j] = titleCaseWord;
    }
    result.push(words.join(" "));
  }
  return result;
})(stringArray);

console.log("Title Caps using anonymous function:", titleCapsArray);