'use strict';
var number_map_to_word_over_26 = function(collection) {
  let letterArray = [];
  for (let value of collection) {
    let firstLetterNumber = Math.ceil(value / 26) - 2;
    let secondLetterNumber = (value - 1) % 26;
    if (firstLetterNumber == -1) {
      letterArray.push(String.fromCharCode(97 + secondLetterNumber));
    } else {
      letterArray.push(String.fromCharCode(97 + firstLetterNumber) + String.fromCharCode(97 + secondLetterNumber));
    }
  }
  return letterArray;
  //return ['a','m','aa','ad','y','aa'];
};

module.exports = number_map_to_word_over_26;
