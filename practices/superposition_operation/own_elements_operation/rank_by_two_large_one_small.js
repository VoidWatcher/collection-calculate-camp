'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort((a, b) => a - b);

  for (let i = 0; i <= collection.length - 3; i += 3) {
    let firstNumber = collection[i];
    let secondNumber = collection[i + 1];
    let thirdNumber = collection[i + 2];
    collection[i] = secondNumber;
    collection[i + 1] = thirdNumber;
    collection[i + 2] = firstNumber;
  }

  return collection;
}
module.exports = rank_by_two_large_one_small;
