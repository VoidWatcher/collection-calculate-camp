'use strict';

function amount_even(collection) {
  let evenCollection = collection.filter((value) => value % 2 == 0);
  return evenCollection.reduce((preVal, curVal) => preVal + curVal);
  //在这里写入代码
}

module.exports = amount_even;
