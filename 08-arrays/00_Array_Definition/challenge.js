module.exports.newArray = function newArray(w, x, y, z){
  var array = [w, x, y, z];
  return array;
};

module.exports.firstAndLast = function firstAndLast(array){
  var lastElementIndex = array.length - 1,
      firstValue = array[0],
      lastValue = array[lastElementIndex];
      nArray = [firstValue, lastValue];

  return nArray;

}
