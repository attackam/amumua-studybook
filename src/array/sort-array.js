/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  return quickSort(nums);
}

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const n = nums.length;
  let mid = Math.floor(n / 2);
  let left = [],
    right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== mid) {
      if (nums[i] < nums[mid]) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  return [...left, nums[mid], ...right];
}
