var singleNumber = function (nums) {
  let map = new Map();

  // 遍历数组，记录每个元素出现的次数
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  // 从我们的map中找到value值为1的元素
  for (let [key] of map) {
    if (map.get(key) === 1) {
      return key;
    }
  }
};
