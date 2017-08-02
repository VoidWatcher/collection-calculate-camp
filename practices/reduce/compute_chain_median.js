'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split("->").map((value) => parseInt(value)).sort((a, b) => a - b);
  let lowMiddle = Math.floor((arr.length - 1) / 2);
  let highMiddle = Math.ceil((arr.length - 1) / 2);
  let median = (arr[lowMiddle] + arr[highMiddle]) / 2;
  return median;
}

module.exports = compute_chain_median;
