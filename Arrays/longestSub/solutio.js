function lengthOfLongestSubstring(str) {
  const seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; (right = str.length); right++) {
    let char = str[right];

    while (seen.has(char)) {
      seen.delete(str[left]);
      left++;
    }

    seen.add(char);

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
