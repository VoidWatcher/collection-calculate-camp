'use strict';

function grouping_count(collection) {
  const numberObject = {};
  /**
  for (var i = 0; i < collection.length; i++) {
    if (numberObject.hasOwnProperty("collection[i]") == false) {
      numberObject[collection[i].toString()] = 1;
    } else {
      numberObject[collection[i].toString()] = numberObject[collection[i].toString()] + 1;
    }
  }
  */
  return numberObject;
  //在这里写入代码
}

module.exports = grouping_count;
