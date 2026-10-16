function findMissing(arr) {
  let missingNum;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingNum = arr[i] + 1;
    }
  }
  return missingNum;
}

console.log(findMissing([1, 2, 4, 6, 3, 7, 8]));
