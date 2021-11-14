function countSort(arr) {
  let maxValue = Math.max(...arr);
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > maxValue) {
  //         maxValue = arr[i];
  //     }
  // }
  let array = new Array(maxValue + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
      array[arr[i]] = (array[arr[i]] || 0) + 1;
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
      let cur = array[i];

      while (cur) {
          result.push(i);
          cur--;
      }
  }

  return result;
}