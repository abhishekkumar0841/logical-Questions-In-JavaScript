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

const myArr = [29, 300, 299, 38, 67];
const maxEl = findMaxEl(myArr);
console.log(maxEl);


//using Math.max() method with spread operators
let newMax = Math.max(...myArr)
console.log('NEW MAX:', newMax);

//using reduce() method with spread operators
let maxReduce = myArr.reduce((max, curr)=> max > curr ? max : curr)
console.log('max reduce:', maxReduce);

//using sort() method
let maxSort = myArr.sort((a, b) => a - b)
let res = maxSort[maxSort.length - 1]
console.log('max sort:', res);

//OR*****
let maxSort2 = myArr.sort((a, b) => b - a)
let res2 = maxSort2[0]
console.log('max sort 2:', res2);