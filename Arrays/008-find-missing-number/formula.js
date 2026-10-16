function findMissing(arr) {
  let n = arr.length;
  let maxNum = n + 1;

  let expectedSum = (maxNum * (maxNum + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 6, 3, 7, 8]));
