'use strict';

function choose_even(collection) {
  //在这里写入代码
  let evenCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      evenCollection.push(collection[i]);
    }
  }
  return evenCollection;
}

module.exports = choose_even;
