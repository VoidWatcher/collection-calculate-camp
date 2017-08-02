'use strict';

function hybrid_operation(collection) {
  return collection.reduce(function (preVal, curVal) {
    return preVal + (curVal * 3 + 2);
  }, 0);
  //在这里写入代码
}

module.exports = hybrid_operation;
