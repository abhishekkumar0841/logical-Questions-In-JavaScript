function binarySearch(arr, el) {
  let min = 0;
  let max = arr.length - 1;

  while (max >= min) {
    let mid = Math.floor((max + min) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 4, 8, 12, 13, 16], 8));
console.log(binarySearch(['abhi', 'ravi', 'sub', 'zeb', 'ak'], 'zeb'));
