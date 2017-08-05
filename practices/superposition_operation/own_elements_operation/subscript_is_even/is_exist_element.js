'use strict';
var is_exist_element = function(collection,element) {
  /**
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    collection.splice(i, 1);
  }
  */

  let newCollection = [];
  for (let i = 0; i < collection.length; i += 2) {
    newCollection.push(collection[i]);
  }

  if (newCollection.indexOf(element) != -1) {
    return true;
  } else {
    return false;
  }
};
module.exports = is_exist_element;
