function shellSort(arr) {
  const n = arr.length;

  for (let gap = Math.ceil(n / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      for (j = i; j > 0; j--) {
        if (arr[j] < arr[j - gap]) {
          [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
        }
      }
    }
  }

  return arr;
}