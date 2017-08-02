'use strict';

function compute_average(collection) {
  //在这里写入代码
  let summary = collection.reduce(function(sum, value) {
    return sum + value;
  });
  let avg = summary / collection.length;
  return avg;
}

module.exports = compute_average;
