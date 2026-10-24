function kthElement(arr, k) {
  arr.sort((a, b) => a - b);

  return arr[k - 1];
}

const arr = [7, 10, 4, 3, 20, 15];
console.log(kthElement(arr, 4));
