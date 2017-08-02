function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_b = object_b["value"];
  let sameCollection = [];
  for (let valueA of collection_a) {
    if (collection_b.indexOf(valueA) != -1) {
      sameCollection.push(valueA);
    }
  }
  return sameCollection;
}

module.exports = collect_same_elements;
