/**
* @param {string} s
* @return {number}
*/
var longestPalindrome = function(s) {
  const n = s.length;
  // 记录结果是否出现过， 这里用set就可以了没必要用map
  let set = new Set();
  let result = 0;

  for (let i = 0; i < n; i++) {
      // 每出现两次，结果+2， 出现1次只记录不加
      if (set.has(s[i])) {
          set.delete(s[i]);
          result += 2;
      } else {
          set.add(s[i]);
      }
  }

  // 回文数中间的一个数字可以是只出现过一次的，判断还有没有剩余元素
  return result < n ? result + 1 : result;
};