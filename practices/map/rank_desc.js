'use strict';
var rank_desc = function(collection) {
  return collection.sort(function(a, b) {
    return a - b;
  });
  //return [2,3,4,5,6];
};

module.exports = rank_desc;
