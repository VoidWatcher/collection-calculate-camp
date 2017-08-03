'use strict';

function grouping_count(collection) {
  let numberObject = {};

  for (let value of collection) {
    if (numberObject.hasOwnProperty(value) == false) {
      numberObject[value] = 1;
    } else {
      numberObject[value] = numberObject[value] + 1;
    }
  }

  return numberObject;
  //在这里写入代码
}

module.exports = grouping_count;
