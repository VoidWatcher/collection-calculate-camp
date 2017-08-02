'use strict';

function double_to_one(collection) {
  let oneDimensionalArray = [];
  for (let value of collection) {
    oneDimensionalArray = oneDimensionalArray.concat(value);
  }

  let deduplicationArray = [];
  for (let value of oneDimensionalArray) {
    if (deduplicationArray.indexOf(value) == -1) {
      deduplicationArray.push(value);
    }
  }
  
  return deduplicationArray;
  //在这里写入代码
}

module.exports = double_to_one;
