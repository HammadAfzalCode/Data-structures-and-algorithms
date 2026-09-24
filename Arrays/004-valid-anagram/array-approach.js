var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array(26).fill(0);
  const baseCode = "a".charCodeAt(0);

  // 1. Process all characters in both strings completely FIRST
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - baseCode]++;
    count[t.charCodeAt(i) - baseCode]--;
  }

  // 2. NOW check if every count returned to 0
  for (let j = 0; j < 26; j++) {
    if (count[j] !== 0) {
      return false;
    }
  }

  return true;
};

// time complexity is 0(n)
// space complexity is O(1)
