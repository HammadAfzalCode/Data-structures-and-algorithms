function dutchProblem(arr) {
  let zeroArray = [];
  let oneArray = [];
  let twoAray = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArray[zeroArray.length] = arr[i];
    } else if (arr[i] === 1) {
      oneArray[oneArray.length] = arr[i];
    } else {
      twoAray[twoAray.length] = arr[i];
    }
  }
  for (let i = 0; i < zeroArray.length; i++) {
    arr[index] = zeroArray[i];
    index++;
  }
  for (let i = 0; i < oneArray.length; i++) {
    arr[index] = oneArray[i];
    index++;
  }
  for (let i = 0; i < twoAray.length; i++) {
    arr[index] = twoAray[i];
    index++;
  }
  return arr;
}

console.log(dutchProblem([0, 1, 2, 0, 1, 1, 2, 1, 2]));
