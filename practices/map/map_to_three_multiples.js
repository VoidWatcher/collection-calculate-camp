'use strict';
var map_to_three_multiples = function(collections) {
  let threeMultiplesCollection = [];
  for (let value of collections) {
    threeMultiplesCollection.push(value * 3);
  }
  return threeMultiplesCollection;
};

module.exports = map_to_three_multiples;
