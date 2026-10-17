function productArray(arr) {
  if (arr.length === 0) return 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
