'use strict';
function map_to_even(collection) {
  let evenCollection = [];
  for (let value of collection) {
    evenCollection.push(value * 2);
  }
  return evenCollection;
}
module.exports = map_to_even;
