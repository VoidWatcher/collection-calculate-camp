'use strict';

function double_to_one(collection) {
  let oneDimensionalArray = [];
  for (let value of collection) {
    oneDimensionalArray = oneDimensionalArray.concat(value);
  }
  return oneDimensionalArray;
  //在这里写入代码
}

module.exports = double_to_one;
