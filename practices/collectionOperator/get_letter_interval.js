'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a == number_b) {
    return [String.fromCharCode(97 + number_a - 1)];
  }
  else if (number_a < number_b) {
    let increasingArray = [];
    for (let i = number_a; i <= number_b; i++) {
      increasingArray.push(String.fromCharCode(97 + i - 1));
    }
    return increasingArray;
  }
  else if (number_a > number_b) {
    let decreasingArray = [];
    for (let i = number_a; i >= number_b; i--) {
      decreasingArray.push(String.fromCharCode(97 + i - 1));
    }
    return decreasingArray;
  }
}

module.exports = get_letter_interval;
