'use strict';
var number_map_to_word = function(collection) {
  let letterArray = [];
  for (let value of collection) {
    letterArray.push(String.fromCharCode(97 + value - 1));
  }
  return letterArray;
  //return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
