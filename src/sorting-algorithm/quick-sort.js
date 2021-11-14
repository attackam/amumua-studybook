function quickSort(arr) {
  const n = arr.length;

  // 取基准尽可能找个中间值，这里我从首尾和中间三个数中取中位数
  const mid = Math.floor(n / 2);

  let baseIndex;

  if (arr[n - 1] > arr[mid] && arr[mid] > arr[0] || arr[0] > arr[mid] && arr[mid] > arr[n - 1]) {
    baseIndex = mid;
  } else if (arr[mid] > arr[n - 1] && arr[n - 1] > arr[0] || arr[0] > arr[n - 1] && arr[n - 1] > arr[mid]) {
    baseIndex = n - 1;
  } else {
    baseIndex = 0;
  }

  let left = [];
  let right = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] < arr[baseIndex]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...bubbleSort(left), ...bubbleSort(right)];
}

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}