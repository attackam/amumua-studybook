/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function (c) {
  let sqrt = Math.floor(Math.sqrt(c));
  let set = new Set();
  for (let i = 0; i <= sqrt; i++) {
    let cur = c - i * i;
    set.add(i * i);

    if (set.has(cur)) {
      return true;
    }
  }
  return false;
};