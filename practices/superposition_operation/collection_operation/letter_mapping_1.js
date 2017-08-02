'use strict';

function even_to_letter(collection) {
  let evenCollection = collection.filter((value) => value % 2 == 0);
  let letterArray = [];
  for (let value of evenCollection) {
    letterArray.push(String.fromCharCode(97 + value - 1));
  }
  return letterArray;
  //在这里写入代码
}

module.exports = even_to_letter;
