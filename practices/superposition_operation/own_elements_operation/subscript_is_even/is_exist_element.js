'use strict';
var is_exist_element = function(collection,element){
  let evenCollection = [];
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    evenCollection.push(collection.splice(i, 1));
  }
  evenCollection = evenCollection.reduce((preVal, curVal) => preVal.concat(curVal));
  
  if (evenCollection.indexOf(element) != -1) {
    return true;
  } else if (evenCollection.indexOf(element) == -1) {
    return false;
  }
};
module.exports = is_exist_element;
