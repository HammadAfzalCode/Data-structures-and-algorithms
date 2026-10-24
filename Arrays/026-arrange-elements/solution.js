function arrangeElements(arr) {
  let positiveElements = [];
  let negativeElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveElements[positiveElements.length] = arr[i];
    } else {
      negativeElements[negativeElements.length] = arr[i];
    }
  }
  let pIndex = 0;
  let nIndex = 0;
  let result = [];
  while (pIndex < positiveElements.length && nIndex < negativeElements.length) {
    result[result.length] = positiveElements[pIndex];
    result[result.length] = negativeElements[nIndex];
    pIndex++;
    nIndex++;
  }

  while (pIndex < positiveElements.length) {
    result[result.length] = positiveElements[pIndex];
    pIndex++;
  }
  while (nIndex < negativeElements.length) {
    result[result.length] = negativeElements[nIndex];
    nIndex++;
  }

  return result;
}
const arr = [1, 2, -1, -2, -3, 3];
console.log(arrangeElements(arr));
