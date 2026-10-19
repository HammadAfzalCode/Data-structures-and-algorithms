function rotateArray(arr, k) {
  let result = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let newIndex = (i + k) % n;
    result[newIndex] = arr[i];
  }
  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
