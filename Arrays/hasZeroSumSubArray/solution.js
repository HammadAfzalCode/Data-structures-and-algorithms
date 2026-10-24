function hasZeroSumSubArray(arr) {
  const seenSum = new Set();
  let runingSum = 0;

  for (let i = 0; i < arr.length; i++) {
    runingSum += arr[i];

    if (runingSum === 0 || seenSum.has(runingSum)) {
      return true;
    }

    seenSum.add(runingSum);
  }
  return false;
}

const arr = [1, 2, -3, 4, 5];
console.log(hasZeroSumSubarray(arr));
