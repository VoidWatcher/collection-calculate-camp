function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (let valueB of object_b.value) {
    for (let valueA of collection_a) {
      if (valueA.key == valueB) {
        valueA.count -= parseInt(valueA.count / 3);
        break;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
