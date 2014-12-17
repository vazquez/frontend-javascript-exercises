module.exports.sumNumbers = function(array){
  var result = 0;
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[index];
    index++;
  }
  return result;
};

module.exports.splitAndLowerCaseString = function(input){
  var finalString = input.toLowerCase().split(",");
  return finalString;
};

module.exports.addIndex = function(array){
  var newArray = [];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    newArray.push(index + " is " + array[index]);
    index++;
  }
  return newArray;
};
