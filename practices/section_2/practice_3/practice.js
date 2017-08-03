function count_same_elements(collection) {
  //在这里写入代码
  let array = [];

  for (let collectionValue of collection) {
    let newObjectFlag = true;

    let collectionValueLetter = collectionValue.match(/[a-z]/).join("");
    let collectionValueNumber = 1;
    if (collectionValue.match(/\d+/) != null) {
      collectionValueNumber = Number(collectionValue.match(/\d+/).join(""));
    }

    for (let arrayValue of array) {
      if (collectionValueLetter == arrayValue.name) {
        arrayValue.summary += collectionValueNumber;
        newObjectFlag = false;
        break;
      }
    }
    if (newObjectFlag) {
      array.push({
        name: collectionValueLetter,
        summary: collectionValueNumber
      });
    }

  }

  return array;
}

module.exports = count_same_elements;
