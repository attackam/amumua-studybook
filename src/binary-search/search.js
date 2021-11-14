/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // 找到了的话直接返回，没找到的话直接折半查找
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 没找到符合条件的
  return -1;
};