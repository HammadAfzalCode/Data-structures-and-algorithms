function nonRepeating(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isRepeating = false;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isRepeating = true;
        break;
      }
    }

    if (!isRepeating) {
      return arr[i];
    }
  }
  return null;
}

const arr = [4, 5, 1, 2, 0, 4, 1, 2];
console.log(nonRepeating(arr));
