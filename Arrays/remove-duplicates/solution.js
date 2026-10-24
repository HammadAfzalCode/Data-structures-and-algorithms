function removeDuplicates(arr) {
  const seen = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i], i);
      result[result.length] = arr[i];
    }
  }
  return result;
}
