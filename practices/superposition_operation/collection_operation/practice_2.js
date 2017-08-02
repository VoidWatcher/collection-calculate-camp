'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddCollection = collection.filter((value) => value % 2 != 0);
  return oddCollection.map((value) => value * 3 + 2);
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;
