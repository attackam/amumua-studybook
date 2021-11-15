var singleNumber = function (nums) {
  let result = 0;
  const n = nums.length;

  // 二进制是32位的， 判断每一位的值
  for (let i = 0; i < 32; i++) {
    // 累加每一位的值总和
    let total = 0;
    for (let j = 0; j < n; j++) {
      // (nums[j] >> i) & 1 => 拿到当前位的值
      total += (nums[j] >> i) & 1;
    }

    // 如果当前位不能被3整除，说明出现1次的元素在当前位有值
    if (total % 3 !== 0) {
      // 把当前位推到结果中去
      result += (total % 3) << i;
    }
  }

  return result;
};
