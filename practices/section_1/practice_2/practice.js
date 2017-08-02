function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = collection_b.reduce((preVal, curVal) => preVal.concat(curVal));
  let sameCollection = [];
  for (let valueA of collection_a) {
    if (collection_b.indexOf(valueA) != -1) {
      sameCollection.push(valueA);
    }
  }
  return sameCollection;
}

module.exports = collect_same_elements;
