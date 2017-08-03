function count_same_elements(collection) {
  //在这里写入代码
  let array = [];   //放置最终结果的数组

  for (let collectionValue of collection) {
    //设置一个旗标，判断是否需要新建对象
    let newObjectFlag = true;
    //提取collectionValue中的字母
    let collectionValueLetter = collectionValue.match(/[a-z]/).join("");
    //提取collectionValue中的数字
    let collectionValueNumber = 1;
    if (collectionValue.match(/\d+/) != null) {
      collectionValueNumber = Number(collectionValue.match(/\d+/).join(""));
    }

    //如果在array中找到了对应的字母对象，就将count加上对应的数量
    for (let arrayValue of array) {
      if (collectionValueLetter == arrayValue.key) {
        arrayValue.count += collectionValueNumber;
        newObjectFlag = false;
        break;
      }
    }

    //如果在array中没有找到对应的字母，就用这个字母创建一个新的对象
    if (newObjectFlag) {
      array.push({
        key: collectionValueLetter,
        count: collectionValueNumber
      });
    }
  }

  return array;
}

module.exports = count_same_elements;
