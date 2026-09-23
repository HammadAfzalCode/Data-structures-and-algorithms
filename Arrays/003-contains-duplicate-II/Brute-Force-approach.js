function containsNearByDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 0; j <= i + k; j++) {
      if (nums[i] === nums[k]) return true;
    }
  }
  return false;
}

console.log(containsNearByDuplicate([1, 2, 3, 1], 3));

// Time complexity is O(n * k)
