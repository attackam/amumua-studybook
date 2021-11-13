/**
* @param {string} s
* @return {number}
*/
var longestPalindrome = function(s) {
  const n = s.length;
  let set = new Set();
  let result = 0;

  for (let i = 0; i < n; i++) {
      if (set.has(s[i])) {
          set.delete(s[i]);
          result += 2;
      } else {
          set.add(s[i]);
      }
  }

  return result < n ? result + 1 : result;
};