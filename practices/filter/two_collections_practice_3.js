'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let collection_c = [];
  for (let valueA of collection_a) {
    for (let valueB of collection_b) {
      if (valueA % valueB == 0 && collection_c.indexOf(valueA) == -1) {
        collection_c.push(valueA);
        break;
      }
    }
  }
  return collection_c;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
