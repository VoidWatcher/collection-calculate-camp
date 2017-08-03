'use strict';
var single_element = function(collection){
  let evenCollection = [];
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    evenCollection.push(collection.splice(i, 1));
  }
  evenCollection = evenCollection.reduce((preVal, curVal) => preVal.concat(curVal));

  //如果一个元素在数组中的第一个索引值等于最后一个索引值，那么证明该元素在数组中唯一
  let nonRepetitiveElements = [];
  for (let value of evenCollection) {
    if (evenCollection.indexOf(value) == evenCollection.lastIndexOf(value)) {
      nonRepetitiveElements.push(value);
    }
  }

  return nonRepetitiveElements;
};
module.exports = single_element;
