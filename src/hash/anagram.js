/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  const n = s.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);
      map.set(t[i], (map.get(t[i]) || 0) - 1);
  }

  for (let [key, value] of map) {
      if (value !== 0) {
          return false;
      }
  }

  return true;
};