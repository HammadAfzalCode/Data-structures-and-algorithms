function intersection(arr1, arr2) {
  const set = new Set(arr1);
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];
    if (set.has(val)) {
      result[result.length] = val;
      set.delete(val);
    }
  }
  return result;
}

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [2, 3, 5];
console.log(intersection(arr1, arr2));
