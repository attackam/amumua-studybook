function mergeSort(arr) {
  const n = arr.length;

  // 不需要排序了
  if (n < 2) {
    return arr;
  }

  const mid = Math.ceil(n / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
  
  // 递归， 分别对左右数组进行排序后合并
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left = [], right = []) {
  let result = [];

  // 数值小的先放进数组，这样子就实现从小到大排列
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // es6信语法，骚操作
  result.push(...left, ...right);
  return result;
}