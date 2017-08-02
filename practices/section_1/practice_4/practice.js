function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arrayA = [];
  let arrayB = object_b.value;
  for (let value of collection_a) {
    arrayA.push(value.key);
  }
  let sameCollection = [];
  for (let valueA of arrayA) {
    if (arrayB.indexOf(valueA) != -1) {
      sameCollection.push(valueA);
    }
  }
  return sameCollection;
}

module.exports = collect_same_elements;
