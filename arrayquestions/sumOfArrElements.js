// Write a function to calculate the sum of all elements in an array.

function calcSumOfAllEl(arr) {
  let total = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let currVal = arr[i];
    total += currVal;
  }

  return total;
}

let myArr = [1, 2, 3, 4, 5];
let sumIs = calcSumOfAllEl(myArr);
console.log("Sum is:", sumIs);

//using reduce() method
let addReduce = myArr.reduce((acc, curr)=> acc + curr)
console.log('Total:', addReduce);
