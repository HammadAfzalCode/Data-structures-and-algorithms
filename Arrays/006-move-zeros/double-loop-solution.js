function moveZero(arr) {
  let writeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }
  for (let i = writeIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

const result = moveZero([1, 1, 1, 0, 0, 0, 2, 2, 2]);
console.log(result);

// time complexity is O(n)
// space complexity is O(1)
