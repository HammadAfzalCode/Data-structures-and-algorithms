function targetOccurence(arr, target) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      counter++;
    }
  }

  return counter;
}
