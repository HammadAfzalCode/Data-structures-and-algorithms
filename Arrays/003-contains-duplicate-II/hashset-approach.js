function containsNearByDuplicate(nums, k) {
  const lastSeen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (lastSeen.has(nums[i])) {
      return true;
    }
    lastSeen.add(nums[i]);
    if (lastSeen.size > k) {
      lastSeen.delete(nums[i - k]);
    }
  }
  return false;
}
// time complexity 0(n)
// space complexty 0(k)
