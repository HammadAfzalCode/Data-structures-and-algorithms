function findMissing(arr) {
  let n = arr.length;
  let max = n + 1;

  const expectedSum = (max * (max + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    actualSum += arr[i];
  }
  const missingNum = expectedSum - actualSum;
  return missingNum;
}
