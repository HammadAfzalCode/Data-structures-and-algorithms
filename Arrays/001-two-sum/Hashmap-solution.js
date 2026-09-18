// Hashmap based solution for two sun

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    } else map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 11, 7, 15], 9));

// time complexity is 0(n)
// space complexity is 0(n)
