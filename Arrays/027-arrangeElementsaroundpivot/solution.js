function arrangeElements(arr, pivot) {
  let smaller = [];
  let equals = [];
  let higher = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller[smaller.length] = arr[i];
    } else if (arr[i] === pivot) {
      equals[equals.length] = arr[i];
    } else {
      higher[higher.length] = arr[i];
    }
  }

  let index = 0;
  for (let i = 0; i < smaller.length; i++) {
    arr[index] = smaller[i];
    index++;
  }
  for (let i = 0; i < equals.length; i++) {
    arr[index] = equals[i];
    index++;
  }
  for (let i = 0; i < higher.length; i++) {
    arr[index] = higher[i];
    index++;
  }
  return arr;
}
const arr = [9, 12, 3, 5, 14, 10, 10];
const pivot = 10;
console.log(arrangeElements(arr, pivot));
