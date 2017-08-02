'use strict';
var map_to_four_multiples_add_one = function(collection) {
  let fourMultiplesAddOneCollection = [];
  for (let value of collection) {
    fourMultiplesAddOneCollection.push(value * 4 + 1);
  }
  return fourMultiplesAddOneCollection;
};

module.exports = map_to_four_multiples_add_one;
