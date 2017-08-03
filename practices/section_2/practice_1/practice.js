function count_same_elements(collection) {
  //在这里写入代码
  let array = [];

  for (let collectionValue of collection) {
    let newObjectFlag = true;
    for (let arrayValue of array) {
      if (collectionValue == arrayValue.key) {
        arrayValue.count++;
        newObjectFlag = false;
        break;
      }
    }
    if (newObjectFlag) {
      array.push({
        key: collectionValue,
        count: 1
      });
    }
  }

  return array;
}

module.exports = count_same_elements;
