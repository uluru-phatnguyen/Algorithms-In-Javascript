function removeDuplicateChar(str) {
  var newArray = [];
  var object = {};
  var char;
  for (var i = 0; i < str.length; i++) {
    char = str[i];
    if (object[char]) {
      //skip
    } else {
      object[char] = 1;
      newArray.push(char);
    }
  }
  return newArray;
}
console.log(removeDuplicateChar(['a','a','s','f','d','f','f','d']));
