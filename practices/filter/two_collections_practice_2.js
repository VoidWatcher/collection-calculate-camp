'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let collection_c = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (collection_c.indexOf(collection_a[i]) == -1 && collection_b.indexOf(collection_a[i]) == -1) {
      collection_c.push(collection_a[i]);
    }
  }
  return collection_c;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
