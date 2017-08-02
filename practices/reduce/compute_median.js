'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sortedCollection = collection.sort((a, b) => a - b);
  let lowMiddle = Math.floor((sortedCollection.length - 1) / 2);
  let highMiddle = Math.ceil((sortedCollection.length - 1) / 2);
  let median = (sortedCollection[lowMiddle] + sortedCollection[highMiddle]) / 2;
  return median;
}

module.exports = compute_median;
