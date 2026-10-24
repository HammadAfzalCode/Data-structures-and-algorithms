function arrayMode(arr) {
  let counts = new Map();
  let result;
  let frequency = 0;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    counts.set(val, (counts.get(val) || 0) + 1);
  }

  for (let [val, count] of counts.entries()) {
    if (count > frequency) {
      frequency = count;
      result = val;
    }
  }
  return result;
}

const arr = [1, 2, 3, 3, 4, 4, 4, 5, 3];
console.log(arrayMode(arr));
