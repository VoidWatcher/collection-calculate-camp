'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a < number_b) {
    let increasingArray = [];
    for (let i = number_a; i <= number_b; i++) {
      let firstLetterNumber = Math.ceil(i / 26) - 2;
      let secondLetterNumber = (i - 1) % 26;
      if (firstLetterNumber == -1) {
        increasingArray.push(String.fromCharCode(97 + secondLetterNumber));
      } else {
        increasingArray.push(String.fromCharCode(97 + firstLetterNumber) + String.fromCharCode(97 + secondLetterNumber));
      }
    }
    return increasingArray;
  }

  if (number_a > number_b) {
    let decreasingArray = [];
    for (let i = number_a; i >= number_b; i--) {
      let firstLetterNumber = Math.ceil(i / 26) - 2;
      let secondLetterNumber = (i - 1) % 26;
      if (firstLetterNumber == -1) {
        decreasingArray.push(String.fromCharCode(97 + secondLetterNumber));
      } else {
        decreasingArray.push(String.fromCharCode(97 + firstLetterNumber) + String.fromCharCode(97 + secondLetterNumber));
      }
    }
    return decreasingArray;
  }

  if (number_a == number_b) {
    let firstLetterNumber = Math.ceil(number_a / 26) - 2;
    let secondLetterNumber = (number_a - 1) % 26;
    if (firstLetterNumber == -1) {
      return [String.fromCharCode(97 + secondLetterNumber)];
    }
    else {
      return [String.fromCharCode(97 + firstLetterNumber) + String.fromCharCode(97 + secondLetterNumber)];
    }
  }
}

module.exports = get_letter_interval_2;
