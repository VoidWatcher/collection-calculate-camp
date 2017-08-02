'use strict';

function median_to_letter(collection) {
  let lowMiddle = Math.floor((collection.length - 1) / 2);
  let highMiddle = Math.ceil((collection.length - 1) / 2);
  let median = Math.ceil((collection[lowMiddle] + collection[highMiddle]) / 2);
  let firstLetterNumber = Math.ceil(median / 26) - 2;
  let secondLetterNumber = (median - 1) % 26;
  if (firstLetterNumber == -1) {
    return String.fromCharCode(97 + secondLetterNumber);
  } else {
    return String.fromCharCode(97 + firstLetterNumber) + String.fromCharCode(97 + secondLetterNumber);
  }
  //在这里写入代码
}

module.exports = median_to_letter;
