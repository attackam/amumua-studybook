/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const n = nums.length;
  let maxArr = [ nums[0] ];
  for (let i = 1; i < n; i++) {
      let cur = nums[i];
      let last = maxArr[maxArr.length - 1];
      if (cur > last) {
          maxArr.push(cur);
      } else {
          let index = searchIndex(maxArr, cur);
          maxArr[index] = cur;
      }
  }

  return maxArr.length;
};

var searchIndex = function(nums, target) {
  let left = 0; right = nums.length - 1;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return nums[left] < target ? left + 1 : left;
}