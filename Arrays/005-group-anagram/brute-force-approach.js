function groupAnagram(strs) {
  const result = [];
  const visited = new Array(strs.length).fill(false);
  function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    return s1.split("").sort().join("") === s2.split("").sort().join("");
  }

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;
    const group = [strs[i]];
    visited[i] = true;
    for (let j = i + 1; j < strs.length; j++) {
      if (!visited[j] && isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        visited[j] = true;
      }
    }
    result.push(group);
  }
  return result;
}
// time complexity is 0(N^2.KlogK)
