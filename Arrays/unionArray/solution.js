function unionArray(arr1, arr2) {
  const set = new Set();
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let val = arr1[i];
    if (!set.has(val)) {
      set.add(val);
      result[result.length] = val;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];
    if (!set.has(val)) {
      set.add(val);
      result[result.length] = val;
    }
  }
  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(unionArray(arr1, arr2));
