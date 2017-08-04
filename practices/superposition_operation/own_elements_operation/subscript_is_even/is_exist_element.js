'use strict';
var is_exist_element = function(collection,element) {
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    collection.splice(i, 1);
  }

  if (collection.indexOf(element) != -1) {
    return true;
  } else if (collection.indexOf(element) == -1) {
    return false;
  }
};
module.exports = is_exist_element;
