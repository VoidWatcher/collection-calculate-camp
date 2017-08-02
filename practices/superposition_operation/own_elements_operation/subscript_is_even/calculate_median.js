'use strict';
var calculate_median = function(collection){
  let evenCollection = [];
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    evenCollection.push(collection.splice(i, 1));
  }
  evenCollection = evenCollection.reduce((preVal, curVal) => preVal.concat(curVal));
  let lowMiddle = Math.floor((evenCollection.length - 1) / 2);
  let highMiddle = Math.ceil((evenCollection.length - 1) / 2);
  let median = (evenCollection[lowMiddle] + evenCollection[highMiddle]) / 2;
  return median;
};
module.exports = calculate_median;
