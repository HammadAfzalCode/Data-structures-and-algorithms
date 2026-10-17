function checkElement(arr, target) {
  if (arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(checkElement([1, 2, 3, 4, 5], 3));
