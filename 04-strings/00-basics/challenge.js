module.exports.formLetter = function(firstName, senderName, message) {
 var result = "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely,\n" + senderName;
 return result;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var slice1 = bigString.substring(startA, endA);
  var slice2 = bigString.substring(startB, endB);
  var combinedString = slice1 + slice2;
  return combinedString;
};

module.exports.findFirstMatch = function(text, searchString) {
  var firstMatch = text.indexOf(searchString);
  return firstMatch;
};

module.exports.findLastMatch = function(text, searchString) {
  var lastMatch = text.lastIndexOf(searchString);
  return lastMatch;
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var a = text.indexOf(searchString);
  var b = text.lastIndexOf(searchString);
  var length = searchString.length;
  a += length;
  return text.substring(a,b);
};
