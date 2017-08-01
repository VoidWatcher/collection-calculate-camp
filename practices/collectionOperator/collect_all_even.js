'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let evenCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      evenCollection.push(collection[i]);
    }
  }
  return evenCollection;
}

module.exports = collect_all_even;
