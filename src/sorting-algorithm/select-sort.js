function selectSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let index = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return arr;
}