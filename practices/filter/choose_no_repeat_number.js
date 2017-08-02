'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  let uniqueArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (uniqueArray.indexOf(collection[i]) == -1) {
      uniqueArray.push(collection[i]);
    }
  }
  return uniqueArray;
}

module.exports = choose_no_repeat_number;
