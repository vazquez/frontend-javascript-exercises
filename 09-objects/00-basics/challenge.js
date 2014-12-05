module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var obj = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  return obj;
};

module.exports.addProperty = function(object, newProp, newValue){
  if (!object.hasOwnProperty(newProp)) {
    object[newProp] = newValue;
  }
  return object;
}

module.exports.formLetter = function(letter){
  var string = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
  return string;
};

module.exports.canIGet = function(item, money){
  var obj = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  }
  return obj[item] <= money;
 };
