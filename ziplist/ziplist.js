const numArr = [1, 2, 3];
const charArr = ['a', 'b', 'c'];

function zipList(arr1, arr2) {
  const returnArr = [];
  for (let i = 0; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
    returnArr.push(arr2[i]);
  }
  return returnArr;
}

console.log(zipList(numArr, charArr));

function zipTheSimpleWay(arr1, arr2) {
  let returnArray = [];
  returnArray = _.zip(arr1, arr2);
  return _.flatten(returnArray);
}

console.log(zipTheSimpleWay(numArr, charArr));
