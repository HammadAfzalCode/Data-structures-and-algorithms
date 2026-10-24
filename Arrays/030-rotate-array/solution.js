function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i + k) % n;
    result[newIndex] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k));
