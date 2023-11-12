// Write a function to find the maximum element in an array.

function findMaxEl(arr) {
  let initialVal = 0;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let currVal = arr[i];
    if (initialVal < currVal) {
      initialVal = currVal;
    }
  }

  return initialVal;
}

const myArr = [300, 29, 299, 38, 670];
const maxEl = findMaxEl(myArr);
console.log(maxEl);
