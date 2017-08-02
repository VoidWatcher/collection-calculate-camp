'use strict';

function average_uneven(collection) {
  let oddCollection = collection.filter((value) => value % 2 != 0);
  let oddSum = oddCollection.reduce((preVal, curVal) => preVal + curVal);
  return oddSum / oddCollection.length;
  //在这里写入代码
}

module.exports = average_uneven;
