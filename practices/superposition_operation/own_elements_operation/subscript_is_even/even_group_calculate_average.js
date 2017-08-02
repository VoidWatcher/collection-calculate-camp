'use strict';
var even_group_calculate_average = function(collection){
  let evenCollection = [];
  let length = collection.length;
  for (let i = 1; i <= Math.floor(length / 2); i++) {
    evenCollection.push(collection.splice(i, 1));
  }
  evenCollection = evenCollection.reduce((preVal, curVal) => preVal.concat(curVal));
  evenCollection = evenCollection.filter((value) => value % 2 == 0);

  if (evenCollection.length == 0) {
    return [0];
  }

  let even1 = [];
  let even2 = [];
  let even3 = [];
  for (let value of evenCollection) {
    if (value.toString().length == 1) {
      even1.push(value);
    } else if (value.toString().length == 2) {
      even2.push(value);
    } else if (value.toString().length == 3) {
      even3.push(value);
    }
  }

  if (even1.length == 0 && even2.length == 0) {
    let sum3 = even3.reduce((preVal, curVal) => preVal + curVal);
    let avg3 = sum3 / even3.length;
    return [avg3];
  }

  let sum1 = even1.reduce((preVal, curVal) => preVal + curVal);
  let avg1 = sum1 / even1.length;

  let sum2 = even2.reduce((preVal, curVal) => preVal + curVal);
  let avg2 = sum2 / even2.length;

  let sum3 = even3.reduce((preVal, curVal) => preVal + curVal);
  let avg3 = sum3 / even3.length;

  let avgArray = [avg1, avg2, avg3];
  return avgArray;
};
module.exports = even_group_calculate_average;
