function mergeSort(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[result.length] = arr1[i];
      i++;
    } else {
      result[result.length] = arr2[j];
      j++;
    }
  }
  while (i < arr1.length) {
    result[result.length] = arr1[i];
    i++;
  }
  while (j < arr2.length) {
    result[result.length] = arr2[j];
    j++;
  }
  return result;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSort(arr1, arr2));
