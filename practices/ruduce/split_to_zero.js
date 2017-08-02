'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let collection = [];
  collection.push(number);
  let i = number;
  while (i > 0) {
    i = Number((i - interval).toFixed(1));
    collection.push(i);
  }
  return collection;
}

module.exports = spilt_to_zero;
