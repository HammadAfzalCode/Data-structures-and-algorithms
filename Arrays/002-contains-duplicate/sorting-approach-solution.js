// two pointer solution of contains duplicate problem

function constainsDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(constainsDuplicate([1, 2, 3, 1]));

// time complexity is nlogn
