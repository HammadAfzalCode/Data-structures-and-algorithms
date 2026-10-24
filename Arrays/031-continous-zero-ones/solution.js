function findMaxLength(arr) {
  const map = new Map();
  map.set(0, -1);

  let maxLen = 0;
  let runingSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      runingSum += -1;
    } else {
      runingSum += 1;
    }

    if (map.has(runingSum)) {
      let prevIndex = map.get(runingSum);
      let currentIndex = i - prevIndex;

      if (currentIndex > maxLen) {
        maxLen = currentIndex;
      }
    } else {
      map.set(runingSum, i);
    }
  }
  return maxLen;
}

const arr = [0, 1, 0, 1, 1, 0, 0, 1, 1];
console.log(findMaxLength(arr));
