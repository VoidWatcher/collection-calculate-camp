function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let sameCollection = [];
  for (let valueA of collection_a) {
    if (collection_b.indexOf(valueA) != -1) {
      sameCollection.push(valueA);
    }
  }
  return sameCollection;
}

module.exports = collect_same_elements;
