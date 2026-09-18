// Brute force Approach Of Two Sum //

const nums = [2, 11, 7, 15];
const target = 9;

function twoSum(nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const result = twoSum([2, 11, 7, 15], 9);
console.log(result);

// Time complexity of this solution is O(N^2)
// Space complexity of this solution is O(1)
