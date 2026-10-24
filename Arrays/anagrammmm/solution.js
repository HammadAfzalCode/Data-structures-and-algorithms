function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counts = new Map();

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!counts.has(char) || counts.get(char) === 0) {
      return false;
    }
    counts.set(char, (counts.get(char) || 0) - 1);
  }
  return true;
}

console.log(areAnagrams("listen", "silent"));
