'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a == number_b) {
    return [number_a];
  }
  else if (number_a < number_b) {
    let increasingArray = [];
    for (let i = number_a; i <= number_b; i++) {
      increasingArray.push(i);
    }
    return increasingArray;
  }
  else if (number_a > number_b) {
    let decreasingArray = [];
    for (let i = number_a; i >= number_b; i--) {
      decreasingArray.push(i);
    }
    return decreasingArray;
  }
}

module.exports = get_integer_interval;
