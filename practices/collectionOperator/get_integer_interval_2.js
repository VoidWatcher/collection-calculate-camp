'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if (number_a == number_b && number_a % 2 == 0) {
    return [number_a];
  }
  else if (number_a == number_b && number_a % 2 != 0) {
    return [];
  }
  else if (number_a < number_b) {
    if (number_a % 2 != 0) {
      number_a ++;
    }
    if (number_b % 2 != 0) {
      number_b --;
    }
    let increasingArray = [];
    for (let i = number_a; i <= number_b; i += 2) {
      increasingArray.push(i);
    }
    return increasingArray;
  }
  else if (number_a > number_b) {
    if (number_a % 2 != 0) {
      number_a--;
    }
    if (number_b % 2 != 0) {
      number_b++;
    }
    let decreaingArray = [];
    for (let i = number_a; i >= number_b; i -= 2) {
      decreaingArray.push(i);
    }
    return decreaingArray;
  }
}

module.exports = get_integer_interval_2;
