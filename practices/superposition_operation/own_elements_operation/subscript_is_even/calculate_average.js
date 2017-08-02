'use strict';
var calculate_average = function(collection){
  let evenCollection = [];
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    evenCollection.push(collection.splice(i, 1));
  }
  evenCollection = evenCollection.reduce((preVal, curVal) => preVal.concat(curVal));
  let sum = evenCollection.reduce((preVal, curVal) => preVal + curVal);
  let avg = sum / evenCollection.length;
  return avg;
};
module.exports = calculate_average;
