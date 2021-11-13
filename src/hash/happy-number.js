/**
* @param {number} n
* @return {boolean}
*/
var isHappy = function(n) {
  let set = new Set();
  let cur = n;
  while (!set.has(cur)) {
      set.add(cur);  
      cur = findNext(cur);

      if (cur === 1) {
          return true;
      }
  }
  return false;
};

var findNext = function(number) {
  str = number + "";
  const n = str.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
      let cur = str[i] - 0;
      result += Math.pow(cur, 2);
  }

  return result;
}