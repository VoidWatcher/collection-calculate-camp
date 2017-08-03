'use strict';
var even_asc_odd_desc = function(collection){
  let oddCollection = [];
  let evenCollection = [];

  for (let value of collection) {
    if (value % 2 != 0) {
      oddCollection.push(value);
    } else {
      evenCollection.push(value);
    }
  }

  oddCollection.sort((a, b) => b - a);
  evenCollection.sort((a, b) => a - b);

  return evenCollection.concat(oddCollection);
};
module.exports = even_asc_odd_desc;
