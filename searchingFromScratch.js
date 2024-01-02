function searchingFunc(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    if (currEl === el) {
      return i;
    }
  }
  return -1;
}

console.log(searchingFunc([4, 2, 45, 6], 6));
