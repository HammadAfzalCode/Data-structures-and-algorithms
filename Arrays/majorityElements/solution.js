function findMajority(arr) {
  let base = arr.length / 2;
  const counts = new Map();
  let result;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    counts.set(val, (counts.get(val) || 0) + 1);
  }

  for (let [val, count] of counts.entries()) {
    if (count >= base) {
      result = val;
    }
  }
  return result;
}

const arr = [1, 2, 3, 3, 3, 3, 4, 5, 3];
console.log(findMajority(arr));
