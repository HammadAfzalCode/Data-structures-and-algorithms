// Binary Search Approach Of Two Sum //

function twoSum(nums, target) {
  const mapped = nums.map((val, index) => ({ val, index }));

  mapped.sort((a, b) => a.val - b.val);

  let left = 0;
  let right = mapped.length - 1;

  while (left < right) {
    const sum = mapped[left].val + mapped[right].val;
    if (sum === target) {
      return [mapped[left].index, mapped[right].index];
    } else if (sum < target) {
      left++;
    } else right--;
  }
}

console.log(twoSum([2, 11, 7, 15], 17));

// time complexity is nlogn
