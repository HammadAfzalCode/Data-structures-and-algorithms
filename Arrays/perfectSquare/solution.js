function perfectSqaure(arr) {
  let length = arr.length;
  let sqrt = Math.sqrt(length);

  return Number.isInteger(sqrt);
}

const arr1 = [1, 4, 9, 16];
console.log(perfectSqaure(arr1));
