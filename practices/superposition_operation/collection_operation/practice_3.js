'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddCollection = collection.filter((value) => value % 2 != 0);
  let byThreeAndPlusFive = oddCollection.map((value) => value * 3 + 5);
  return byThreeAndPlusFive.reduce((preVal, curVal) => preVal + curVal);
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;
