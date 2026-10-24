function findDuplicates(arr) {
  const counts = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    counts.set(val, (counts.get(val) || 0) + 1);
  }

  for (let [val, count] of counts.entries()) {
    if (count > 1) {
      result[result.length] = val;
    }
  }
  return result;
}
const arr = [1, 2, 2, 2, 3, 4, 4, 5];
console.log(findDuplicates(arr));
