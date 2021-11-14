/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 求差值， 判断之前我们遍历过的元素存不存在，存在直接返回
    let cur = target - nums[i];
    if (map.has(cur)) {
      return [map.get(cur), i];
    }

    // 记录每个元素，提供给后面作为判断
    map.set(nums[i], i);
  }

  // 循环结束没找到就是不存在
  return [];
};