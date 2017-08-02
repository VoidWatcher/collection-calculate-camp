'use strict';

function average_to_letter(collection) {
  let sum = collection.reduce((preVal, curVal) => preVal + curVal);
  let avg = Math.ceil(sum / collection.length);
  return String.fromCharCode(97 + avg - 1);
  //在这里写入代码
}

module.exports = average_to_letter;
