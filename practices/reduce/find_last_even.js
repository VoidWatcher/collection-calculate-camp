'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for (let value of collection.reverse()) {
    if (value % 2 == 0) {
      return value;
    }
  }
}

module.exports = find_last_even;
