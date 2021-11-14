/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
  // 用来记录这个数字有没有出现过， 如果出现过就可以结束了
  let set = new Set();
  let cur = n;
  while (!set.has(cur)) {
      set.add(cur);  
      cur = findNext(cur);
      // 结束条件判断
      if (cur === 1) {
          return true;
      }
  }
  return false;
};

// 计算当前数字的快乐数， 游戏规则 每一位数字的平方累加
var findNext = function(number) {
  str = number + ""; // js隐式转换，number转string
  const n = str.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
      let cur = str[i] - 0; // js隐式转换，string转number
      result += Math.pow(cur, 2);
  }

  return result;
}