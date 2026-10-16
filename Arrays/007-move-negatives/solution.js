function moveNegatives(arr) {
  let negatives = [];
  let nonNegatives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives[negatives.length] = arr[i];
    } else {
      nonNegatives[nonNegatives.length] = arr[i];
    }
  }
  let index = 0;
  for (let i = 0; i < negatives.length; i++) {
    arr[index] = negatives[i];
    index++;
  }
  for (let i = 0; i < nonNegatives.length; i++) {
    arr[index] = nonNegatives[i];
    index++;
  }
  return arr;
}

console.log(moveNegatives([1, -1, 3, -2, 4, -5]));
