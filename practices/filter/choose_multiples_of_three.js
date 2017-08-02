'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  let threeTimeCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] % 3 == 0) {
      threeTimeCollection.push(collection[i]);
    }
  }
  return threeTimeCollection;
}

module.exports = choose_multiples_of_three;
